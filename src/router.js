import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import MovieGenreTab from "./Components/Movies";

import AppFooter from "./Components/Footer";
import MovieDetailPage from "./Components/MovieDetailPage";
import TVSeriesPage from "./Components/TVSeriesPage";

const Router = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<MovieGenreTab />}></Route>
        <Route path="/movies/:id" element={<MovieDetailPage />}></Route>
        <Route path="/tv-series" element={<TVSeriesPage />}></Route>
      </Routes>
      <AppFooter />
    </div>
  );
};

export default Router;
