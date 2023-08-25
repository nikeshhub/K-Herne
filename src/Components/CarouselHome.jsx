import { Carousel } from "antd";
import React from "react";

const CarouselHome = () => {
  const carouselSettings = {
    autoplay: true,
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

  return (
    <div style={{ padding: "30px 0" }}>
      <Carousel {...carouselSettings}>
        <div style={{ overflow: "hidden", borderRadius: "2.5%", marginRight:"10px"}}>
          <img
            src="./poster.jpg"
            alt=""
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>

        <div style={{ overflow: "hidden", borderRadius: "2.5%" }}>
          <img
            src="./poster2.jpg"
            alt=""
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>

        <div style={{ overflow: "hidden", borderRadius: "2.5%" }}>
          <img
            src="./poster3.jpg"
            alt=""
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>

        <div style={{ overflow: "hidden", borderRadius: "2.5%" }}>
          <img
            src="./poster.jpg"
            alt=""
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
