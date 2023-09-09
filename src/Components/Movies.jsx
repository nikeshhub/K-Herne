import { Card } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import './Movies.css'; // Import a CSS file for styling

const { Meta } = Card;

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios({
        url:
          "https://api.themoviedb.org/3/movie/popular?api_key=7075fe97f28375fc950eee9bfe2a0364",
        method: "GET",
      });
      setMovies(response.data.results);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movie-container">
      {movies.map((value, i) => (
        <div key={i} className="movie-card">
          <Card
            hoverable
            style={{ width: "330px" }}
            cover={
              <img
                alt={value.title}
                src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
              />
            }
          >
            <Meta title={value.title}></Meta>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Movies;
