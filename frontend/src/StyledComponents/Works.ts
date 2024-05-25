import { BorderAllRounded, Height, Padding } from "@mui/icons-material";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
  Box,
  Button,
} from "@mui/material";
import { OrangeText } from "./HomeHero";

export const HeroWorkMainContainer = styled(Grid)({
  width: "100vw",
  height: "100vh",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(assets/aboutbgIMG2.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "opacity 0.5s ease-in-out",
    zIndex: 1,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#00356569", // Adjust the color and opacity as needed
    zIndex: 2,
  },

  "@media screen and (max-width: 600px)": {
    height: "60vh",
  },
  "@media screen and (max-width: 400px)": {
    height: "90vh",
  },
});

export const WorkBgMask = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  zIndex: 999,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    "*": {
      textAlign: "center",
    },
  },
}));

export const WorksMainHero = styled(Box)({
  width: "100vw",
  height: "auto",
  minHeight: "30vh",
  backgroundImage: "url(assets/works-hero.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  // overlay background color over the image
});
export const BgOverlay = styled(Box)({
  width: "100%",
  height: "auto",
  display: "flex",
  alignItems: "center",
});
export const PlatformContainer = styled(Grid)({
  width: "100%",
  display: "flex",
  background: "#033D66",
  padding: "1rem",
  justifyContent: "center",
  paddingTop: "50px",
  paddingBottom: "50px",
});
export const PLatformItem = styled(Grid)({});
export const StepContainer = styled(Box)({
  display: "flex",
  padding: "2rem",
  flexWrap: "wrap",
  gap: "2rem",
  maxWidth: "1250px",
  width: "100%",
  "@media (max-width: 768px)": {
    gap: "1rem",
    padding: 0,
    justifyContent: "center",
  },
});
export const StepBox = styled(Box)({
  flexBasis: "calc(33.333% - 21.5px)",
  background: "white",
  padding: "2rem",
  borderRadius: "20px",
  "@media (max-width: 768px)": {
    padding: "1rem",
    flexGrow: 0,
  },

  "@media (max-width: 480px)": {
    flexBasis: "calc(100% - 21.5px)",
    padding: "1rem",
  },
});
export const ImageContainer = styled(Box)({
  maxWidth: "100%",
  maxHeight: "100%",
  overflow: "hidden",
});
export const Subtitle = styled(Typography)({
  color: "#fff",
  fontSize: "3rem",
  fontWeight: 400,
  textAlign: "center",
  fontFamily: "inter",
  paddingBottom: "50px",
  "@media(min-width:768px)": {
    width: "100%",
  },
  "@media(max-width:480px)": {
    fontSize: "1.5rem",
  },
});
export const StepTitle = styled(Typography)({
  color: "#003565",
  fontSize: "24px",
  fontWeight: 500,
});
export const StepText = styled(Typography)({
  color: "#444444",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: "22.5px",
});
export const OrangeText1 = styled(OrangeText)({
  fontSize: "3rem",
  "@media(max-width:480px)": {
    fontSize: "1.5rem",
  },
});
export const BlueText = styled(Subtitle)({
  color: "#14263E",
});
export const CarouselDescText = styled(BlueText)({
  color: "#1A1A1A",
  fontSize: "1.75rem",
});
export const WhiteBox = styled(Box)({
  width: "100%",
  maxWidth: "800px",
  height: "400px",
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "50px",
  borderTopRightRadius: "150px",
});
export const Part = styled(Box)({
  width: "100%",
  height: "auto",
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "url(assets/who-we-bg.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

export const PartMask = styled(Box)({
  width: "100%",
  height: "auto",
  minHeight: "80vh",
  background: "#194b7670",
  justifyContent: "center",
  textAlign: "center",
  display: "flex",
});
export const BlueSection = styled(Box)({
  maxWidth: "100%",
  height: "auto",
  minHeight: "35vh",
  background: "#14263E",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "50px",
});

export const WhiteBackgroundAccordion = styled(Accordion)({
  backgroundColor: "white",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)", // Optional: Add shadow for a better visual effect
  padding: "10px 20px",
  marginBottom: "30px",
  borderRadius: "10px",
  width: "90vw",
  maxWidth: "1000px",
});

export const WhiteBackgroundAccordionSummary = styled(AccordionSummary)({
  // Add any specific styles for the AccordionSummary if needed
});

export const WhiteBackgroundAccordionDetails = styled(AccordionDetails)({
  // Add any specific styles for the AccordionDetails if needed
});

export const AccordionText = styled(Typography)({
  color: "#003565",
  fontWeight: "600",
  fontSize: "22px",
  fontFamily: "'Inter'",
});
export const AccordionText2 = styled(Typography)({
  color: "#003565",
  fontWeight: "400",
  fontSize: "18px",
  fontFamily: "'Inter'",
});

export const CarouselIntroWrapper = styled(Box)({
  width: "45%",
  padding: "1rem 1rem 0",
  "@media(max-width:480px)": { width: "100%" },
});

export const CarouselIntro = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  textAlign: "center",
});

export const CarouSelIndicator = styled(Button)<{ isSelected: boolean }>(
  ({ isSelected }) => ({
    position: "relative",
    marginLeft: "0",
    width: "100%",
    maxWidth: "45px",
    "&:hover": {
      background: "transparent",
    },
    "&:after": {
      content: `""`,
      position: "absolute",
      lef: 0,
      top: 0,
      background: isSelected ? "#B69021" : "#DEDEDE",
      borderRadius: "45px",
      width: isSelected ? "45px" : "25.16px",
      height: "14.3px",
      transition: "all 0.3s ease-in-out",
    },
    "@media screen and (max-width:768px)": {
      "&:after": {
        width: isSelected ? "30px" : "20.16px",
      },
    },
  })
);

export const TestimonyCarouSelIndicator = styled(CarouSelIndicator)<{
  isSelected: boolean;
}>(({ isSelected }) => ({
  maxWidth: "16.64px",
  height: "16.64px",
  overflow: "hidden",
  "&:after": {
    width: "16.64px",
    height: "16.64px",
    borderRadius: "0",
    background: isSelected ? "#033D66" : "#C1C1C1",
  },
  "@media screen and (max-width:768px)": {
    "&:after": {
      width: "15px",
      height: "15px",
    },
  },
}));
