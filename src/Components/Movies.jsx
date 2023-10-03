import React, { useCallback, useEffect, useState } from "react";
import { Card, Rate, Typography, Pagination, Input, Select } from "antd";
import axios from "axios";
import "./Movies.css";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;
const { Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("popularity.desc");
  const navigate = useNavigate();

  // const truncateText = (text, maxLength) => {
  //   return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  // };

  const getMovies = useCallback(async () => {
    try {
      let apiUrl = "";
      if (searchQuery) {
        apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=7075fe97f28375fc950eee9bfe2a0364&page=${currentPage}&sort_by=${sortOption}&query=${searchQuery}`;
      } else {
        // Fetch popular movies when there is no search query
        apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=7075fe97f28375fc950eee9bfe2a0364&page=${currentPage}&sort_by=${sortOption}`;
      }
  
      const response = await axios({
        url: apiUrl,
        method: "GET",
      });
      setMovies(response.data.results);
      setTotalResults(response.data.total_results);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }, [currentPage, searchQuery, sortOption]);
  
  

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const handleSortChange = (value) => {
    setSortOption(value);
  };

  const handleCardClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div className="movie-container">
      <div className="search-sort-container">
        <Search
          placeholder="Search movies..."
          onSearch={handleSearch}
          style={{ width: 400, marginRight: 16 }}
        />
        <Select
          defaultValue="popularity.desc"
          style={{ width: 160 }}
          onChange={handleSortChange}
          placeholder="Sort"
        >
          <Option value="popularity.desc">Popular Desc</Option>
          <Option value="popularity.asc">Popular Asc</Option>
          <Option value="vote_average.desc">Rating Desc</Option>
          <Option value="vote_average.asc">Rating Asc</Option>
          <Option value="release_date.desc">Release Date Desc</Option>
          <Option value="release_date.asc">Release Date Asc</Option>
        </Select>
      </div>
      <div className="movieslist">
      {movies.map((value, i) => (
        <div key={i} className="movie-card" onClick={() => handleCardClick(value.id)}>
          <div className="mobile-layout">
            <div className="mobile-image">
              <img
                alt={value.title}
                src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
              />
            </div>
            <div className="mobile-info">
              <Meta title={value.title} />
              <Rate allowHalf defaultValue={value.vote_average / 2} />
              <br />
              <Text strong style={{ color: "white" }}>
                Release Date:
              </Text>
              <br />
              <Text style={{ color: "white" }}>{value.release_date}</Text>
              <br />
              <Text strong style={{ color: "white" }}>
                Overview:
              </Text>
              <br />
              <Text style={{ color: "white" }}>{value.overview}</Text>
            </div>
          </div>
        </div>
      ))}
      </div>
      <Pagination
        current={currentPage}
        total={totalResults}
        onChange={handlePageChange}
        pageSize={20}
        style={{ color: "white", marginTop: 16 }}
      />
    </div>
  );
};

export default Movies;
