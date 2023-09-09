import React, { useEffect, useState } from "react";
import { Card, Badge } from "antd";
import { Splide, SplideSlide } from "@splidejs/react-splide"; // Import Splide components
import axios from "axios";
import "@splidejs/react-splide/css/skyblue";


const { Meta } = Card;

const TrendingHome = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const apiUrl =
      "https://api.themoviedb.org/3/trending/movie/week?api_key=7075fe97f28375fc950eee9bfe2a0364";

    axios
      .get(apiUrl)
      .then((response) => {
        setPopular(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <h1>Trending movies</h1>
      <Splide
        options={{
          perPage: 5, // Number of slides per page
          breakpoints: {
            1024: { perPage: 2 }, // Adjust perPage for tablet
            464: { perPage: 1 }, // Adjust perPage for mobile
          },
          gap: "20px", // Gap between slides
          rewind: true,
          // Allow rewinding when reaching the end
        }}
        className="custom-splide"
      >
        {popular.map((value) => (
          <SplideSlide key={value.id}>
            <Badge.Ribbon text={value.status} color="red">
              <Card
                style={{
                  width: 268,
                }}
                cover={
                  <img
                    alt={value.title}
                    src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                  />
                }
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
                  {value.vote_average}
                </div>
              </Card>
            </Badge.Ribbon>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default TrendingHome;