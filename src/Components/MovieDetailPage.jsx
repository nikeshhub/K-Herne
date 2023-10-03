// MovieDetail.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Card, Row, Col, Typography, Button, Space, Rate } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import "./MovieDetail.css";
import VideoPopup from "./VideoPopup";
const { Title, Paragraph } = Typography;

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [director, setDirector] = useState("");
  const [screenplay, setScreenplay] = useState("");
  const [cast, setCast] = useState([]);
  const [videos, setVideos] = useState([]);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: "7075fe97f28375fc950eee9bfe2a0364",
            },
          }
        );

        // Fetch cast information
        const castResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits`,
          {
            params: {
              api_key: "7075fe97f28375fc950eee9bfe2a0364",
              limit: 10,
            },
          }
        );
        const directorInfo = castResponse.data.crew.find(
          (crewMember) => crewMember.job === "Director"
        );

        if (directorInfo) {
          setDirector(directorInfo.name);
        } else {
          setDirector("Director information not found");
        }
        const screenplayInfo = castResponse.data.crew.find(
          (crewMember) => crewMember.job === "Screenplay"
        );

        if (screenplayInfo) {
          setScreenplay(screenplayInfo.name);
        } else {
          setScreenplay("screenplay information not found");
        }

        // Fetch videos (trailers)
        const videosResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          {
            params: {
              api_key: "7075fe97f28375fc950eee9bfe2a0364",
            },
          }
        );

        // Fetch movie images
        const imagesResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/images`,
          {
            params: {
              api_key: "7075fe97f28375fc950eee9bfe2a0364",
            },
          }
        );

        setMovie(movieResponse.data);
        setCast(castResponse.data.cast);
        setVideos(videosResponse.data.results);
        setImages(imagesResponse.data.backdrops);
      } catch (error) {
        console.error("Error fetching movie details", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Function to handle opening the video popup
  const handleOpenVideoPopup = (video) => {
    setSelectedVideo(video);
    setShowVideoPopup(true);
  };

  // Function to close the video popup
  const handleCloseVideoPopup = () => {
    setSelectedVideo(null);
    setShowVideoPopup(false);
  };

  return (
    <div>
      <div className="movie-detail-container">
        <div
          className="movie-backdrop"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${images[0]?.file_path}')`,
          }}
        ></div>
        <div className="movie-content">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <img
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                className="movie-poster"
              />
            </Col>
            <Col xs={24} sm={12} md={16}>
              <Title
                level={1}
                className="movie-title"
                style={{ color: "white" }}
              >
                {movie.title}
              </Title>
              <Rate allowHalf value={movie.vote_average / 2} />
              <Title level={3} style={{ color: "white" }}>
                Overview
              </Title>
              <Paragraph className="movie-overview">{movie.overview}</Paragraph>
              <Space size="large">
                <div>
                  <Title style={{ color: "white" }} level={3}>
                    Director
                  </Title>
                  <Paragraph className="movie-director">{director}</Paragraph>
                </div>
                <div>
                  <Title style={{ color: "white" }} level={3}>
                    Screenplay
                  </Title>

                  <Paragraph className="movie-screenplay">
                    {screenplay}
                  </Paragraph>
                </div>
              </Space>
            </Col>
          </Row>
        </div>
      </div>

      <div
        style={{
          margin: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Title style={{ color: "white" }} level={3}>
            Cast
          </Title>
        </div>
        <div>
          <Link style={{ textDecoration: "none", color: "#05b4f7" }}>
            See all
          </Link>
        </div>
      </div>
      <div style={{ margin: "20px" }}>
        <Splide
          options={{
            perPage: 6,
            gap: "0.5rem",
            rewind: true,
            pagination: false,
            breakpoints: {
              1250: { perPage: 5 },
              1024: { perPage: 4 },
              810: { perPage: 3 },

              540: { perPage: 2 },
            },
          }}
        >
          {cast.map((actor) => (
            <SplideSlide key={actor.id}>
              <Card className="actor-card">
                <img
                  alt={actor.name}
                  src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                  className="actor-profile"
                />
                <Title
                  style={{ color: "white" }}
                  level={4}
                  className="actor-name"
                >
                  {actor.name}
                </Title>
                <Paragraph className="actor-character">
                  {actor.character}
                </Paragraph>
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div
        style={{
          margin: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Title style={{ color: "white" }} level={3}>
            Videos
          </Title>
        </div>
        <div>
          <Link style={{ textDecoration: "none", color: "#05b4f7" }}>
            See all
          </Link>
        </div>
      </div>
      <div style={{ margin: "20px" }}>
        <Splide
          options={{
            perPage: 6,
            gap: "1rem",
            breakpoints: {
              1024: { perPage: 2 }, // Adjust perPage for tablet
              464: { perPage: 2 },
            },
            rewind: true,
            pagination: false,
          }}
        >
          {videos.map((video) => (
            <SplideSlide key={video.id}>
              <Card
                className="video-card"
                onClick={() => handleOpenVideoPopup(video)}
              >
                <img
                  alt={video.name}
                  src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                  className="video-thumbnail"
                />
                <Title
                  style={{ color: "white" }}
                  level={4}
                  className="video-title"
                >
                  {video.name}
                </Title>
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {showVideoPopup && (
        <VideoPopup video={selectedVideo} onClose={handleCloseVideoPopup} />
      )}
      <div style={{ textAlign: "center", margin: "40px" }}>
        <Button
          onClick={() => {
            navigate("/movies");
          }}
          style={{ backgroundColor: "#05b4f7", color: "white", border: "none" }}
        >
          Browse all movies <RightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default MovieDetailPage;
