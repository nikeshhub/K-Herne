import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Splide, SplideSlide } from "@splidejs/react-splide"; // Import Splide components
import axios from "axios";
import "@splidejs/react-splide/css/skyblue";
import "./PopularHome.css";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const PopularHome = () => {
  const [popular, setPopular] = useState([]);
  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      const response = await axios({
        url: "https://api.themoviedb.org/3/movie/popular?api_key=7075fe97f28375fc950eee9bfe2a0364",
        method: "GET",
      });
      setPopular(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleCardClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Popular movies</h1>
      <Splide
        options={{
          perPage: 4, // Number of slides per page
          breakpoints: {
            1024: { perPage: 2 }, // Adjust perPage for tablet
            464: { perPage: 1 }, // Adjust perPage for mobile
          },
          gap: "20px", // Gap between slides
          rewind: true,
          pagination: false,

          // Allow rewinding when reaching the end
        }}
        className="custom-splide"
      >
        {popular.map((value) => (
          <SplideSlide key={value.id}>
            <Card
              hoverable
              style={{
                width: 315,
              }}
              cover={
                <img
                  alt={value.title}
                  src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                />
              }
              onClick={() => {
                handleCardClick(value.id);
              }}
            >
              <Meta
                title={value.title}
                description={`Release Date: ${value.release_date}`}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  right: "10px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#00cc00",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {value.vote_average.toFixed(1)}
              </div>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default PopularHome;
