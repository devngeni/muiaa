import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Box,
  useMediaQuery,
  useTheme,
  styled
} from "@mui/material";

const ImageCarousel = () => {
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
    maxWidth: "1500px",
    margin: "auto",
  });

  return (
    <>
    <br/>
    <CustomCarousel {...settings}>
      <Box>
        <Box sx={{  textAlign: "center" }}>
          <img
            src="/assets/aboutcarousel/11.png"
            style={{ width: "80%", margin: "auto" }}
          />
        </Box>
      </Box>
      <Box>
        <Box sx={{  textAlign: "center" }}>
          <img
            src="/assets/aboutcarousel/13.png"
            style={{ width: "80%", margin: "auto" }}
          />
        </Box>
      </Box>
      <Box>
        <Box sx={{  textAlign: "center" }}>
          <img
            src="/assets/aboutcarousel/14.png"
            style={{ width: "80%", margin: "auto" }}
          />
        </Box>
      </Box>
    </CustomCarousel>
    <br/>
    </>
  );
};

export default ImageCarousel;
