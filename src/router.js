import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import MovieGenreTab from "./Components/Movies";

import AppFooter from "./Components/Footer";

const Router = () => {
  return (
    <div>
    <Navbar />
    <Routes>


      <Route path="/" element={<Home />}></Route>
      <Route path="/movies" element={<MovieGenreTab />}></Route>
    </Routes>
    <AppFooter/>
    </div>
  );
};

export default Router;
