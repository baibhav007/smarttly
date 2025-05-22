import React, { useState, useEffect } from "react";
import axios from 'axios';
import classes from "./HomePageBlog.module.css";
import Button from "../../ui/input/reuse/Button/button";
import { GoArrowRight } from "react-icons/go";
import HomePageBlogInfo from "./HomePageBlogInfo";
import { Link } from "react-router-dom";

const HomePageBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1024);

  const blogsPerPage = 3;

  // Function to strip HTML tags and inline styles
  const stripHtml = (html) => {
    return html
      .replace(/<[^>]+>/g, '') // Remove HTML tags
      .replace(/(\s*style\s*=\s*"[^"]*")/g, '') // Remove inline styles
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
  };

  // Function to format time (e.g., "10 min ago")
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    return `${diffInMinutes} min ago`;
  };

  // Fetch blogs from API
  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/blogs?page=${currentPage}&limit=10`);
      if (response.data.success) {
        const fetchedBlogs = response.data.data.map((blog, index) => ({
          ...blog,
          content: stripHtml(blog.content), // Clean content
          created_at: formatTime(blog.created_at) + ` ${index + 1}`, // Format time with index for uniqueness
          slug: blog.title.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase(), // Create slug
        }));
        setBlogs(fetchedBlogs);
        const totalBlogs = response.data.total || fetchedBlogs.length;
        setTotalPages(Math.ceil(totalBlogs / blogsPerPage));
        console.log('Fetched blogs successfully:', fetchedBlogs);
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

  // Handle window resize to update mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll in mobile view
  useEffect(() => {
    if (isMobileView && blogs.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
      }, 5000); // Change every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isMobileView, blogs.length]);

  // Fetch blogs on mount or page change
  useEffect(() => {
    fetchBlogs();
  }, [currentPage]);

  if (loading) {
    return (
      <div className={classes.loading}>
        <p>Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes.error}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={classes.HomePageBlogFrame}>
      <div className={classes.HomePageBlog}>
        <div>
          <div>Blogs</div>
        </div>
        <div>
          <div className={classes.blogdata}>
            {blogs.length === 0 ? (
              <p>No blogs available.</p>
            ) : isMobileView ? (
              <div className={classes.mobileBlogWrapper}>
                <HomePageBlogInfo
                  key={blogs[currentIndex]._id}
                  id={blogs[currentIndex]._id}
                  img={`${process.env.REACT_APP_API_URL}/admin/blogs/${blogs[currentIndex].blog_image}`}
                  time={blogs[currentIndex].created_at}
                  title={blogs[currentIndex].title}
                  desc={blogs[currentIndex].content}
                  name={blogs[currentIndex].author_name}
                  designation={blogs[currentIndex].author_description}
                  blogname={`${process.env.REACT_APP_API_URL}/admin/blogs/${blogs[currentIndex].author_profile}`}
                  slug={blogs[currentIndex].slug}
                />
              </div>
            ) : (
              blogs.slice(0, blogsPerPage).map((data) => (
                <HomePageBlogInfo
                  key={data._id}
                  id={data._id}
                  img={`${process.env.REACT_APP_API_URL}/admin/blogs/${data.blog_image}`}
                  time={data.created_at}
                  title={data.title}
                  desc={data.content}
                  name={data.author_name}
                  designation={data.author_description}
                  blogname={`${process.env.REACT_APP_API_URL}/admin/blogs/${data.author_profile}`}
                  slug={data.slug}
                />
              ))
            )}
          </div>
          <div>
            <Link to="/blog" className="link">
              <Button
                color="var(--backgroundcolor)"
                backgroundColor="var(--maintext)"
                borderColor="var(--maintext)"
                className={classes.buttonn}
              >
                View All <GoArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBlog;