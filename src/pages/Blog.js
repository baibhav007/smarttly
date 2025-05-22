// import Blog from '../Components/Blog/Blog';
import Blogs from '../Components/Blog/Blogs/Blogs';
import Blogtop from '../Components/Blog/BlogTop/Blogtop';
import TopBlogs from '../Components/Blog/TopBlogs/TopBlogs';
import BreadCrumb from '../Components/ui/BreadCrumb/BreadCrumb';
import { Helmet } from "react-helmet-async";

function BlogPage(){
    const data={
        path:"Blog",
        title:"Blog",
        content:"Blog"
    }
    return(
        <>
        <Helmet>
  <title>Smarttly Blog - Digital Marketing Insights & Trends</title>
  <meta
    name="description"
    content="Stay updated with the latest digital marketing trends, SEO strategies, PPC tips, and web development insights from Smarttly's expert team."
  />
</Helmet>

        {/* <BreadCrumb data={data}/> */}
        <Blogtop/>
        <TopBlogs/>
        <Blogs/>
        </>
    )
}
export default BlogPage;