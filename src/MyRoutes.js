import React from 'react';
import PageNotFound from './Component/pagenotfound';
import Home from './Component/pages/Home';
import Shop from './Component/pages/shop'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function MyRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/booktable" element={<Booktable />} /> */}
          <Route element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
