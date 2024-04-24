import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Box,
  useMediaQuery,
  useTheme,
  styled
} from "@mui/material";

const ProductsCarousel = () => {
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
    <CustomCarousel {...settings}>
      <Box>
        <Box sx={{ padding: { md: "50px", xs: "20px" }, textAlign: "center" }}>
          <img
            src="/assets/nourishing.svg"
            style={{ width: "80%", margin: "auto" }}
          />
        </Box>
      </Box>
      <Box>
        <Box sx={{ padding: { md: "50px", xs: "20px" }, textAlign: "center" }}>
          <img
            src="/assets/carefully.svg"
            style={{ width: "80%", margin: "auto" }}
          />
        </Box>
      </Box>
      <Box>
        <Box sx={{ padding: { md: "50px", xs: "20px" }, textAlign: "center" }}>
          <img
            src="/assets/smart.svg"
            style={{ width: "80%", margin: "auto" }}
          />
        </Box>
      </Box>
    </CustomCarousel>
  );
};

export default ProductsCarousel;
