import React from 'react';
import PageNotFound from './Component/pagenotfound';
import Home from './Component/pages/Home';
import Shop from './Component/pages/shop'
// import Booktable from './restaurant/pages/booktable';
// import Menu from './Component/menu';
// import About from './restaurant/pages/about';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function MyRoutes(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/booktable" element={<Booktable />} /> */}
          <Route element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
