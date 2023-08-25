import React from "react";
import { Card, Badge } from "antd";
const { Meta } = Card;

const PopularHome = () => {
  const PopularHomeList = [
    {
      id: 1,
      name: "Oppenhiemer",
      picture:
        "https://res.cloudinary.com/duaz5kg1m/image/upload/v1692626128/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY_._V1__qxw7g6.jpg",
      releaseDate: "2023-07-03",
      rating: 9.8,
      status: "awardwinning",
    },
    {
      id: 2,
      name: "Barbie",
      picture:
        "https://res.cloudinary.com/duaz5kg1m/image/upload/v1692626127/iuFNMS8U5cb6xfzi51Dbkovj7vM_methaf.jpg",
      releaseDate: "2023-07-03",
      rating: 8,
      status: "superhit",
    },
    {
      id: 3,
      name: "Project X",
      picture:
        "https://res.cloudinary.com/duaz5kg1m/image/upload/v1692628085/MV5BMTc1MTk0Njg4OF5BMl5BanBnXkFtZTcwODc0ODkyNw_._V1__v1gnhq.jpg",
      releaseDate: "2023-07-03",
      rating: 7.8,
      status: "party",
    },
    {
      id: 4,
      name: "The Man Called OTTO",
      picture:
        "https://res.cloudinary.com/duaz5kg1m/image/upload/v1692628085/MV5BOTk4NjdiNzktM2FlNS00NmIwLWE0MWItNjc1MDY2Njg3YWYyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1__aavdoo.jpg",
      releaseDate: "2023-07-03",
      rating: 9.5,
      status: "newrelease",
    },
    {
      id: 5,
      name: "Interstellar",
      picture:
        "https://res.cloudinary.com/duaz5kg1m/image/upload/v1692628084/71LNVGVpWYL._AC_UF894_1000_QL80__ffrmpt.jpg",
      releaseDate: "2023-07-03",
      rating: 9,
      status: "hot",
    },
    // ... other data objects ...
  ];

  return (
    <div style={{ padding: "50px" }}>
      <h1>Trending movies</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {PopularHomeList.map((value) => (
          <Badge.Ribbon text={value.status} color="magenta" >
            <Card
              key={value.id}
              style={{
                width: 260,
                marginLeft: "20px", // Add margin for spacing between cards
                marginBottom: "20px", // Add margin for spacing between rows
              }}
              cover={<img alt="example" src={value.picture} />}
            >
              <Meta title={value.name} description={value.releaseDate} />
              <div
                style={{
                  position: "absolute", // Position the circle inside the card
                  bottom: "30px", // Adjust top position of the circle
                  right: "10px", // Adjust right position of the circle
                  width: "40px", // Set width of the circle
                  height: "40px", // Set height of the circle
                  borderRadius: "50%", // Make it a circle by setting border radius to 50%
                  backgroundColor: "#00cc00", // Choose a background color for the circle
                  color: "white", // Set text color
                  display: "flex", // Use flex layout for centering content
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                  fontWeight: "bold", // Add bold font weight
                  fontSize: "18px", // Adjust font size
                }}
              >
                 {value.rating}
              </div>
            </Card>
          </Badge.Ribbon>
          
        ))}
      </div>
    </div>
  );
};

export default PopularHome;
