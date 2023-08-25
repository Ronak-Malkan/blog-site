import "./blogPost.css";
import { Link } from "react-router-dom";

const BlogPost = ({ blog }) => {
   return (
      <div>
         <Link to="/" className="HomeButton">
            Home
         </Link>
         <h1 className="heading colorGreen BlogTitle">
            {blog.title}
            <br />
            <br />
            <div className="authorDateHolder">
               <span className="authorDate">
                  Author: &nbsp;&nbsp;{blog.userName}
               </span>
               <span className="authorDate">
                  {blog.createdAt.substring(0, 10)}
               </span>
            </div>
         </h1>
         <p className="blogBody">{blog.body}</p>
      </div>
   );
};

export default BlogPost;
