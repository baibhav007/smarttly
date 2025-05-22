import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Blogs.module.css';
import BlogsCard from './BlogsCard';

const Blogs = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const BLOGS_PER_PAGE = 9;

  const stripHtml = (html) => {
    return html
      .replace(/<[^>]+>/g, '')
      .replace(/(\s*style\s*=\s*"[^"]*")/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/blogs?page=1&limit=10`);
      if (response.data.success) {
        const blogs = response.data.data.map((blog) => ({
          ...blog,
          content: stripHtml(blog.content),
          tags: blog.tags || [], // Ensure tags is an array
        }));
        const filtered =
          activeFilter === 'All'
            ? blogs
            : blogs.filter((blog) =>
                blog.tags.some((tag) =>
                  tag
                    .split(',') // Split tags like "PPC,Technical" into ["PPC", "Technical"]
                    .map((t) => t.trim())
                    .includes(activeFilter)
                )
              );
        setFilteredBlogs(filtered);
        const totalBlogs = response.data.total || blogs.length;
        setTotalPages(Math.ceil(totalBlogs / BLOGS_PER_PAGE));
        console.log('Fetched and filtered blogs successfully!');
      } else {
        throw new Error('Failed to fetch blogs');
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError('Unable to load blogs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [activeFilter, currentPage]);

  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (error) {
    return (
      <div className={classes.error}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={classes.Blogs}>
      <div>
        <div>
          <div>Latest Blog</div>
          <div>
            {[
              'All',
              'SEO',
              'Web Development',
              'SMO',
              'PPC',
              'Technical',
              'Analytics & Reporting',
              'Content Creation',
            ].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilter(filter)}
                className={activeFilter === filter ? classes.activeFilter : classes.tab}
                aria-selected={activeFilter === filter}
                aria-label={`Filter blogs by ${filter}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className={classes.cardsway}>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((data) => (
              <div className={classes.dataclass} key={data._id}>
                <BlogsCard
                  img={`${process.env.REACT_APP_API_URL}/admin/blogs/${data.blog_image}`}
                  id={data._id}
                  admintime={formatTime(data.created_at)}
                  title={data.title}
                  desc={data.content}
                  adminname={data.author_name}
                  admindesc={data.author_description}
                  adminimg={`${process.env.REACT_APP_API_URL}/admin/blogs/${data.author_profile}`}
                  slug={data.title.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}
                  blogTitle={data.title}
                />
              </div>
            ))
          ) : (
            <p style={{ fontFamily: "Inter", fontSize: "18px", color: "red" }}></p>
          )}
        </div>
        {totalPages > 1 && (
          <div className={classes.pagination}>
            <button
              className={classes.prevButton}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <div className={classes.pageNumbers}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <span
                  key={page}
                  onClick={() => handlePageChange(page)}
                  onKeyDown={(e) => e.key === 'Enter' && handlePageChange(page)}
                  role="button"
                  tabIndex={0}
                  style={{ backgroundColor: page === currentPage ? '#f0f0f0' : 'transparent', cursor: 'pointer' }}
                >
                  {page}
                </span>
              ))}
            </div>
            <button
              className={classes.nextButton}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;