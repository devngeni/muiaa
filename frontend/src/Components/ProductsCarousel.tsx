import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, useMediaQuery, useTheme, styled } from "@mui/material";
import { OrangeText, SeamlessMainText } from "@/StyledComponents/HomeHero";
import {
  BlueText,
  CarouselDescText,
  CarouSelIndicator,
  CarouselIntro,
  CarouselIntroWrapper,
  OrangeText1,
} from "@/StyledComponents/Works";

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
    <>
      <CarouselIntro>
        <CarouselIntroWrapper>
          <BlueText
            sx={{
              width: "100%",
              fontSize: { xs: "28px", md: "40px", xl: "48px" },
              textAlign: "center",
              margin: "auto",
              pt: "70px",
              lineHeight: { xs: "35px", md: "60px" },
              fontWeight: "normal",
            }}
          >
            We believe that in a world that
            <span>
              <OrangeText1
                sx={{
                  width: "100%",
                  fontSize: { xs: "28px", md: "40px", xl: "48px" },
                  textAlign: "center",
                  margin: "auto",
                  lineHeight: { xs: "35px", md: "60px" },
                  fontWeight: "normal",
                }}
              >
                turns you into a business.
              </OrangeText1>
            </span>
          </BlueText>
          <CarouselDescText
            sx={{
              width: "100%",
              fontSize: { xs: "20px", md: "24px", xl: "28px" },
              textAlign: "center",
              margin: "auto",
              color: "#1A1A1A",
              lineHeight: { xs: "30px", md: "44px" },
              fontWeight: "300",
              pt: "20px",
            }}
          >
            We are able to use technology to deliver to you an unparalleled
            dairy feeds supply.
          </CarouselDescText>
        </CarouselIntroWrapper>
      </CarouselIntro>
      <CustomCarousel
        {...settings}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          return (
            <CarouSelIndicator
              disableRipple
              isSelected={isSelected}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            ></CarouSelIndicator>
          );
        }}
      >
        <Box>
          <Box
            sx={{
              padding: { md: "50px", xs: "20px" },
              mb: { xs: "30px", md: "10px" },
              textAlign: "center",
            }}
          >
            <img
              src="/assets/nourishing.svg"
              style={{ width: "80%", margin: "auto" }}
            />
          </Box>
        </Box>
        <Box>
          <Box
            sx={{ padding: { md: "50px", xs: "20px" }, textAlign: "center" }}
          >
            <img
              src="/assets/carefully.svg"
              style={{ width: "80%", margin: "auto" }}
            />
          </Box>
        </Box>
        <Box>
          <Box
            sx={{ padding: { md: "50px", xs: "20px" }, textAlign: "center" }}
          >
            <img
              src="/assets/smart.svg"
              style={{ width: "80%", margin: "auto" }}
            />
          </Box>
        </Box>
      </CustomCarousel>
    </>
  );
};

export default ProductsCarousel;
