import React, { useState, useEffect } from 'react';
import classes from './Blogtop.module.css';
import Button from '../../ui/input/reuse/Button/button';
import { Link } from 'react-router-dom';

// Utility to strip HTML tags and get first sentence
const stripHtmlAndGetFirstSentence = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  const text = div.textContent || div.innerText || '';
  const sentences = text.split('.').filter(s => s.trim());
  return sentences[0] ? sentences[0] + '.' : '';
};

// Utility to generate URL-friendly slug from title
const generateSlug = (title) => {
  return title.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase();
};

const Blogtop = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/blogs`);
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        // Filter for topBlog: true and take the first one
        const topBlog = data.data.find(blog => blog.topBlog === true);
        setBlog(topBlog || null);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Format date (e.g., "10th Jan 2025")
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const suffix = (day) => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
    return `${day}${suffix(day)} ${month} ${year}`;
  };

  if (loading) {
    return <div></div>;
  }

  if (error || !blog) {
    return <div>{error || 'No top blog found'}</div>;
  }

  // Fallback image URL (adjust as needed)
  const fallbackImage = '/path/to/default-image.png';

  // Generate slug for the blog
  const blogSlug = generateSlug(blog.title);

  return (
    <div className={classes.fbframe} id={blog._id}>
      <div className={classes.fblog}>
        <div className={classes.fblogcontent}>
          <div className={classes.fblogcontenttop}>
            <div>
              <div>
                <p className={classes.fgreen}>Featured Blog - </p>
                <p className={classes.ftime}>{formatDate(blog.created_at)}</p>
              </div>
              <div>{blog.title}</div>
            </div>
            <div>{stripHtmlAndGetFirstSentence(blog.content)}</div>
          </div>
          <div className={classes.fblogcontentbottom}>
            <div>
              <div>
                <img
                  src={blog.author_profile ? `${process.env.REACT_APP_API_URL}/admin/blogs/${blog.author_profile}` : fallbackImage}
                  alt={blog.author_name}
                  height={58}
                  width={58}
                  style={{
                    backgroundColor: 'var(--backgroundcolor)',
                    objectFit: 'cover',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    borderRadius: '50%',
                  }}
                />
                <div>
                  <p className={classes.adminname}>{blog.author_name}</p>
                  <p className={classes.admindesc}>{blog.author_description}</p>
                </div>
              </div>
            </div>
            <Link to={`/blog/${blogSlug}`} className={classes.link}>
              <Button
                color="var(--backgroundcolor)"
                borderColor="var(--secondarycolor)"
                backgroundColor="var(--secondarycolor)"
                 className={classes.topblogfirst}
              >
                Read More
              </Button>
            </Link>
          </div>
        </div>
        <img
          src={blog.blog_image ? `${process.env.REACT_APP_API_URL}/admin/blogs/${blog.blog_image}` : fallbackImage}
          alt="blog"
          className={classes.fimg}
        />
      </div>
    </div>
  );
};

export default Blogtop;