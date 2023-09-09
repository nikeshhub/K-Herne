import React, { useEffect, useState } from "react";
import { Card, Rate, Typography } from "antd"; // Import Rate component
import axios from "axios";
import "./Movies.css"; // Import a CSS file for styling

const { Meta } = Card;
const { Text } = Typography;
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const getMovies = async () => {
    try {
      const response = await axios({
        url: "https://api.themoviedb.org/3/movie/popular?api_key=7075fe97f28375fc950eee9bfe2a0364",
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
          {/* Conditionally render the layout based on screen size */}
          {window.innerWidth <= 767 ? (
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
                <Text style={{ color: "white" }}>
                  {" "}
                  {truncateText(value.overview, 100)}
                </Text>
              </div>
            </div>
          ) : (
            <div className="desktop-layout">
            <Card
              hoverable
              style={{ width: "315px" }}
              cover={
                <img
                  alt={value.title}
                  src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                />
              }
            >
              <Meta title={value.title} />
            </Card>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Movies;
