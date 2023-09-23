import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CarouselHome = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [id, setId] = useState();
  const navigate = useNavigate();
  const carouselSettings = {
    autoplay: true,
    dots: false,
    centerMode: true,
    slidesToShow: 2, // Adjust the number of visible items
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    // Fetch trending movies from TMDB API
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=7075fe97f28375fc950eee9bfe2a0364"
    )
      .then((response) => response.json())
      .then((data) => {
        // Extract the backdrop from the API response
        const backdrop = data.results.map((result) => result.backdrop_path);
        const id = data.results.map((result) => result.id);
        setTrendingMovies(backdrop);
        setId(id);
      })
      .catch((error) => {
        console.error("Error fetching data from TMDB API:", error);
      });
  }, []);
  const handleCardClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div style={{ padding: "30px 0" }}>
      <Carousel {...carouselSettings}>
        {trendingMovies.map((backdrop, index) => (
          <div key={index} style={{ overflow: "hidden", borderRadius: "2.5%" }}>
            <img
              onClick={() => {
                handleCardClick(id);
              }}
              src={`https://image.tmdb.org/t/p/original${backdrop}`}
              alt=""
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                objectPosition: "center center",
                cursor: "pointer",
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
