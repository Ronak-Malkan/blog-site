import { Link } from "react-router-dom";
import "./blogCard.css";

const BlogCard = ({ blog }) => {
   return (
      <Link className="blogTile" to={`blog/${blog.id}`}>
         <h4>{blog.title}</h4>
         <div className="dateAuthorContainer">
            <span className="userName">{blog.userName}</span>
            <span className="date">{blog.createdAt.substring(0, 10)}</span>
         </div>
         <p>{blog.body.split(".")[0]}</p>
      </Link>
   );
};

export default BlogCard;
