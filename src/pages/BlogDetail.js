import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BDtop from '../Components/Blog/BlogDetail/BDtop/BDtop';
import Conclusion from '../Components/Blog/BlogDetail/Conclusion/Conclusion';
import Similar from '../Components/Blog/BlogDetail/Similar/Similar';
import BHeading from '../Components/Blog/BlogDetail/BHeading/BHeading';
import BSubHeading from '../Components/Blog/BlogDetail/BSubHeading/BSubHeading';
import BPoint from '../Components/Blog/BlogDetail/BPoint/BPoint';
import BTitle from '../Components/Blog/BlogDetail/BTitle/BTitle';
import BSubTitle from '../Components/Blog/BlogDetail/BSubTitle/BSubTitle';
import BPara from '../Components/Blog/BlogDetail/BPara/BPara';
import BSubPoint from '../Components/Blog/BlogDetail/BSubPoint/BSubPoint';
import BSubhead from '../Components/Blog/BlogDetail/BSubhead/BSubhead';

export default function BlogDetailPage() {
  const { blogID } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogData, setBlogData] = useState([]);
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

  // Function to format time (e.g., "Jan 15, 2025, 3:45 PM")
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

  // Fetch all blogs from API
  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/blogs?page=1&limit=10`);
      if (response.data.success) {
        const fetchedBlogs = response.data.data.map((blog) => ({
          id: blog._id,
          img: `${process.env.REACT_APP_API_URL}/admin/blogs/${blog.blog_image}`,
          time: formatTime(blog.created_at),
          title: blog.title,
          desc: blog.content,
          content: stripHtml(blog.content), // Keep cleaned content
          created_at: formatTime(blog.created_at), // Formatted date
          author_name: blog.author_name,
          author_description: blog.author_description,
          blogname: `${process.env.REACT_APP_API_URL}/admin/blogs/${blog.author_profile}`,
          slug: blog.title.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase(),
          tags: blog.tags || [],
          components: blog.components || [], // Ensure components are included
          conclusiondesc: blog.conclusiondesc || '',
          conclusionhead: blog.conclusionhead || '',
        }));

        // Find the specific blog by blogID (matching slug or ID)
        const selectedBlog = fetchedBlogs.find(
          (b) => b.slug === blogID || b.id === blogID
        );

        if (selectedBlog) {
          setBlog(selectedBlog);
        } else {
          setError('Blog not found.');
        }

        setBlogData(fetchedBlogs);
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
    if (blogID) {
      fetchBlogs();
    }
  }, [blogID]);

  const componentMap = {
    BHeading,
    BSubHeading,
    BPoint,
    BTitle,
    BSubTitle,
    BPara,
    BSubPoint,
    BSubhead,
  };

  if (loading) {
    return <div></div>;
  }

  if (error || !blog) {
    return (
      <div>
        <h1>Blog Not Found</h1>
        <p>{error || 'The blog you are looking for does not exist.'}</p>
        <Link to="/blogs">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title ? `${blog.title} - Smarttly Blog` : 'Smarttly Blog'}</title>
        <meta
          name="description"
          content={blog.metaDescription || 'Read the latest insights on digital marketing, SEO, PPC, and web development from Smarttly.'}
        />
      </Helmet>
      <BDtop blog={blog} />
      <div className={`blog blog-${blog.slug}`}>
        {blog.components?.map((component, index) => {
          const Component = componentMap[component.type];
          if (!Component) {
            console.error(`Component type "${component.type}" is not defined.`);
            return null;
          }
          return <Component key={index} {...component.props} />;
        })}
      </div>
      {/* <Conclusion blog={blog} /> */}
      <Similar blogData={blogData} currentBlog={blog} />
    </>
  );
}