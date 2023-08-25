import { useParams } from "react-router-dom";
import blogsData from "../../utilities/blogsData";
import BlogPost from "../../components/blogPost/blogPost";

const Blog = () => {
   const parameters = useParams();

   const blog = blogsData.blogs.find(
      (blogValue) => blogValue.id === Number(parameters.id)
   );

   return <BlogPost blog={blog} />;
};

export default Blog;
