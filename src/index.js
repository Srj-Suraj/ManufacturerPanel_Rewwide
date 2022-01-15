import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import  Navigation from "./Pages/Navigation";
import  Footer from "./Pages/Footer";
import  Home from "./Pages/Home";
import  About from "./Pages/About";
import  Contact from "./Pages/Contact";
// import  Blog from "./Pages/Blog";
// import  Posts from "./Pages/Posts";
// import  Post from "./Pages/Post";

ReactDOM.render(
  <Router basename="/">
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route> */}
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();