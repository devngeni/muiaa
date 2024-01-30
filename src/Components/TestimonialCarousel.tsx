import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Paper,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  styled
} from "@mui/material";

const TestimonialCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    showThumbs: false,
    showArrows: !isMobile,
    infiniteLoop: true,
    swipeable: true,
    emulateTouch: true,
    showStatus: false,
    centerMode: true,
    centerSlidePercentage: isMobile ? 100 : 33.33,
  };
  const CustomCarousel = styled(Carousel)({
    border: "1px solid red",
    maxWidth:"90vw",
    margin:"auto"
  });

  return (
    <CustomCarousel {...settings}>
      <Paper>
        <Typography variant="h5">Slide 1</Typography>
        <Button variant="contained" color="primary">
          Button 1
        </Button>
      </Paper>
      <Paper>
        <Typography variant="h5">Slide 2</Typography>
        <Button variant="contained" color="primary">
          Button 2
        </Button>
      </Paper>
      <Paper>
        <Typography variant="h5">Slide 3</Typography>
        <Button variant="contained" color="primary">
          Button 3
        </Button>
      </Paper>
    </CustomCarousel>
  );
};

export default TestimonialCarousel;
