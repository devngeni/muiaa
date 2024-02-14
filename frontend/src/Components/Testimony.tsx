import { Star } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

function Testimony() {
  // function to generate a random number from 1 - 5
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 5) + 1;
  };

  // function to render stars based on count and color
  const renderStars = (count:any, color:any) =>
    [...Array(count)].map((_, index) => <Star sx={{ color }} key={index} />);

  const randomStarsCount = generateRandomNumber();
  const yellowStars = renderStars(randomStarsCount, "#E9C33B");
  const grayStars = renderStars(5 - randomStarsCount, "#D9D9D9");

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Avatar
            sx={{ width: "60px", height: "60px" }}
            src="https://source.unsplash.com/1000x1000/?person"
          />
          <Box sx={{ paddingLeft: "10px", textAlign: "left" }}>
            <Typography variant="h6">John Doe</Typography>
            {yellowStars}
            {grayStars}
          </Box>
        </Box>
        <br />
        <Typography
          variant="body1"
          sx={{ paddingLeft: "10px", textAlign: "left", color: "#393939", fontWeight:"300", fontSize:"16px", lineHeight:"26px" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, nemo, quidem quia voluptas quae voluptatibus
          doloribus quos aperiam doloremque. Quisquam voluptatum, voluptate,
          nemo, quidem quia voluptas quae voluptatibus doloribus quos aperiam
          doloremque.
        </Typography>
      </Box>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Testimony;
