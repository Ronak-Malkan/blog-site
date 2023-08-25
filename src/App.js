import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import Blog from "./routes/blog/blogRoute";

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/blog/:id" element={<Blog />} />
      </Routes>
   );
}

export default App;
