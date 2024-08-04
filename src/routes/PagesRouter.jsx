import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Shop from "../pages/Shop";
import Venue from "../pages/Venue";

const PagesRouter = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="menu" element={<Menu />} />
        <Route path="shop" element={<Shop />} />
        <Route path="venue" element={<Venue />} />
      </Route>
    </Routes>
  );
};

export default PagesRouter;
