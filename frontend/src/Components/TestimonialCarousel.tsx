import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Paper,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  styled,
} from "@mui/material";
import Testimony from "./Testimony";

const TestimonialCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    showThumbs: false,
    showArrows: false,
    infiniteLoop: true,
    swipeable: true,
    emulateTouch: true,
    showStatus: false,
    centerMode: true,
    centerSlidePercentage: isMobile ? 100 : 33.33,
    autoPlay: true,
  };
  const CustomCarousel = styled(Carousel)({
    maxWidth: "90vw",
    margin: "auto",
  });

  return (
    <CustomCarousel   {...settings}>
      <Box sx={{ border: "none" }}>
        <Testimony />
      </Box>
      <Box sx={{ border: "none" }}>
        <Testimony />
      </Box>
      <Box sx={{ border: "none" }}>
        <Testimony />
      </Box>
    </CustomCarousel>
  );
};

export default TestimonialCarousel;
