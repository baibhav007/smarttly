import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './TopBlogs.module.css';
import TopBlogSequence from './TopBlogSequence';
import { GoArrowRight } from "react-icons/go";
import Button from '../../ui/input/reuse/Button/button';
import { Link } from 'react-router-dom';

const TopBlogs = () => {
  const [topBlog, setTopBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to strip HTML tags and inline styles
  const stripHtml = (html) => {
    return html
      .replace(/<[^>]+>/g, '') // Remove HTML tags
      .replace(/(\s*style\s*=\s*"[^"]*")/g, '') // Remove inline styles
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
  };

  // Function to truncate text to a specified number of words (approximating 3 lines)
  const truncateText = (text, wordLimit = 30) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  // Function to format time (e.g., "15th Jan 2025")
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  // Fetch blogs from API
  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    console.log('Fetching blogs...', process.env.REACT_APP_API_URL);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/blogs?page=1&limit=10`);
      if (response.data.success) {
        const fetchedBlogs = response.data.data.map((blog) => ({
          ...blog,
          content: stripHtml(blog.content), // Clean content
          created_at: formatDate(blog.created_at), // Format date
          slug: blog.title.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase(), // Create slug
        }));
        // Set the first blog as the top blog (featured)
        setTopBlog(fetchedBlogs[0] || null);
        // Set the next 3 blogs for the sequence, excluding the top blog
        setBlogs(fetchedBlogs.slice(1, 4)); // Start from index 1 to exclude topBlog, take up to 3 blogs
        console.log('Fetched blogs successfully!');
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
  }, []);

  if (loading) {
    return (
      <div className={classes.loading}>
      </div>
    );
  }

  if (error || !topBlog) {
    return (
      <div className={classes.error}>
        <p>{error || 'No top blog available.'}</p>
      </div>
    );
  }

  return (
    <div className={classes.TopBlogsFrame}>
      <div className={classes.TopBlogs}>
        <div>Top Blogs</div>
        <div>
          <div>
            <div className={classes.topblogimg}>
              <img src={`${process.env.REACT_APP_API_URL}/admin/blogs/${topBlog.blog_image}`} alt="topblog" />
            </div>
            <div className={classes.TopBlogsdata}>
              <div>
                <div>
                  <p></p>
                  <p>{topBlog.title}</p>
                </div>
                <div>{truncateText(topBlog.content, 30)}</div>
              </div>
              <div className={classes.topblogadmin}>
                <div>
                  <div>
                    <img
                      src={`${process.env.REACT_APP_API_URL}/admin/blogs/${topBlog.author_profile}`}
                      alt={topBlog.author_name}
                      width={56}
                      height={56}
                      style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        objectFit: "cover",
                        borderRadius: '50%'
                      }}
                    />
                  </div>
                  <div>
                    <p>{topBlog.author_name}</p>
                    <p>{topBlog.author_description}</p>
                    <p>{topBlog.created_at}</p>
                  </div>
                </div>
                <Link to={`/blog/${topBlog.slug}`}>
                  <Button
                    color={"White"}
                    backgroundColor={"#34A852"}
                    borderColor={"#34A852"}
                    className={classes.topblogfirst}
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.topblogssequence}>
            {blogs.map((data) => (
              <TopBlogSequence
                key={data._id}
                id={data._id}
                img={`${process.env.REACT_APP_API_URL}/admin/blogs/${data.blog_image}`}
                admintime={data.created_at}
                title={data.title}
                desc={truncateText(data.content, 30)}
                adminname={data.author_name}
                admindesc={data.author_description}
                adminimg={`${process.env.REACT_APP_API_URL}/admin/blogs/${data.author_profile}`}
                slug={data.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBlogs;