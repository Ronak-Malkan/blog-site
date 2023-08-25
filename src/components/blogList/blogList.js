import BlogCard from "../blogCard/blogCard";
import "./blogList.css";

const BlogList = ({ blogClickHandler, blogsList }) => {
   return (
      <div className="blogListContainer" onClick={blogClickHandler}>
         {blogsList.map((blog) => {
            return <BlogCard key={blog.id} blog={blog} />;
         })}
      </div>
   );
};

export default BlogList;
