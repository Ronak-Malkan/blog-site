import { useState } from "react";
import blogsData from "../../utilities/blogsData";
import BlogList from "../../components/blogList/blogList";

import "./home.css";

const Home = () => {
   const [blogsList, setBlogsList] = useState(blogsData.blogs);

   const searchInputHandler = (e) => {
      setBlogsList(
         blogsData.blogs.filter((blog) => {
            return blog.title
               .toLowerCase()
               .includes(e.target.value.toLowerCase());
         })
      );
   };

   const blogClickHandler = (e) => {
      if (e.target.className !== "blogListContainer") {
      }
   };

   return (
      <div>
         <h1 className="heading">
            <span className="colorGreen">Blog</span> It
         </h1>
         <input
            className="searchBar"
            type="search"
            onInput={searchInputHandler}
            placeholder="Search for blogs using titles..."
         />
         <BlogList blogClickHandler={blogClickHandler} blogsList={blogsList} />
      </div>
   );
};

export default Home;
