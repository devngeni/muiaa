import { styled, Grid, Box, Typography, Button } from "@mui/material";
import { keyframes } from "@mui/system";

const baseFontSize = {
  fontSize: "16px", // Set a base font size for default screens
};
//

export const HomeMainContainer = styled(Box)({
  backgroundImage: "linear-gradient(to right, #033D66, #14263E)",
});

export const HeroMainContainer = styled(Grid)<{
  bgImgUrl: string;
  opacity: number;
}>(({ bgImgUrl, opacity }) => ({
  width: "100vw",
  height: "100vh",
  position: "relative",
  h1: {
    paddingBottom: "50px",
  },
  p: {
    paddingBottom: "50px",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bgImgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "opacity 0.5s ease-in-out",
    opacity: opacity,
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
  "@media screen and (max-width:390px)": {
    height: "70vh",
    h1: {
      lineHeight: "29px",
      paddingBottom: "20px",
    },
    p: {
      paddingBottom: "20px",
    },
  },
}));

export const BgMask = styled(Box)(({ theme }) => ({
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
export const ContentContainer = styled(Box)({
  width: "100%",
  maxWidth: "75%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "@media (max-width:600px)": {
    maxWidth: "95%",
  },
});
export const HeroMainText = styled(Typography)({
  ...baseFontSize,
  fontWeight: "400",
  color: "#ffff",
  textAlign: "left",
  width: "80%",
  lineHeight: "72.61px",
  fontFamily: "'Inter'",
  fontSize: "60px",
  "@media screen and (max-width: 1200px)": {
    lineHeight: "55px",
  },

  "@media (max-width: 600px)": {
    lineHeight: "48px",
    margin: "auto",
  },
});
export const HeroMiniText = styled(Typography)({
  fontWeight: "300",
  fontFamily: "'Inter'",
  color: "#FFFFFF",
  textAlign: "left",
  width: "70%",
  fontSize: "24px",
  lineHeight: "36px",
  "@media (max-width: 600px)": {
    width: "80%",
    margin: "auto",
    textAlignment: "justify",
  },
});
export const BlueButton = styled(Button)({
  border: "none",
  color: "#fff",
  borderRadius: "5px",
  width: "90%",
  height: "50px",
  fontSize: "calc(1rem + ((1vw - 6px) * 0.4274))",
  background: "#033D66",
  fontWeight: "bold",
  textTransform: "capitalize",
  "@media screen and (max-width: 600px)": {
    fontWeight: "420",
  },
  "&:hover": {
    background: "transparent",
    border: "1px solid #fff",
    color: "#fff",
  },
});
export const OrangeButton = styled(BlueButton)({
  color: "#DFBC6D",
  border: "1px solid #DFBC6D",
  background: "transparent",
  "&:hover": {
    color: "#003565",
    background: "#E9BC6D",
    border: "1px solid #E9BC6D",
  },
});
export const NavyStatContainer = styled(Box)({
  backgroundColor: "#fff",
  position: "relative",
  width: "80%",
  maxWidth: "1400px",
  margin: "auto",
  borderRadius: "10px",
  paddingBottom: "20px",
  zIndex: 503,
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
});
export const NavyStatGridContainer = styled(Grid)({
  width: "100%",
  height: "100%",
});
export const NavyStatItem = styled(Grid)<{ noAfter?: boolean }>(
  ({ noAfter }) => ({
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "20px",
    fontWeight: "900",
    position: "relative",
    ...(noAfter
      ? {}
      : {
          "&::after": {
            content: '""',
            position: "absolute",
            borderRight: "2px dotted #003565",
            height: "70%",
            right: 0,
            bottom: 0,
          },
        }),

    "@media screen and (max-width: 768px)": {
      "&::after": {
        display: "none",
      },
    },
  })
);
export const NavyNumber = styled(Typography)({
  fontSize: "36px",
  fontWeight: "700",
  color: "#003565",
  width: "90%",
  margin: "auto",
  fontFamily: "'Inter'",
});
export const NavyText = styled(Typography)({
  fontSize: "20px",
  fontWeight: "300",
  color: "#003565",
  fontFamily: "'Inter'",
  lineHeight: "24px",
  width: "90%",
});
export const NavySection = styled(Box)({
  width: "100%",
  height: "auto",
  backgroundImage: "linear-gradient(to right, #033D66, #14263E)",
  minHeight: "400px",
  zIndex: 400,
  paddingTop: "100px",
});
export const NavyTextContainer = styled(Box)({
  width: "60%",
  maxWidth: "600px",
  margin: "auto",
  minHeight: "600px",
  backgroundImage: "url('./assets/Yodt.gif')",
  backgroundSize: "cover", // Adjust as needed
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  mixBlendMode: "screen",
  backgroundColor: "linear-gradient(to right, #033D66, #14263E)",
  marginTop: "80px",
});
export const WhiteText = styled(Typography)({
  color: "#fff",
  fontWeight: "500",
  width: "160%",
  margin: "auto",
  textAlign: "center",
  fontFamily: "'Inter'",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  "@media (max-width: 800px)": {
    width: "90%",
    margin: "auto",
  },
});
export const SeamlessMainContainer = styled(Grid)({
  width: "90%",
  margin: "auto",
  height: "auto",
  minHeight: "auto",
});
export const SeamlessGridItem = styled(Grid)({
  height: "auto",
});
export const SeamlessMainText = styled(Typography)({
  fontSize: "48px",
  color: "#1A1A1A",
  textAlign: "left",
  width: "80%",
  fontFamily: "'Inter'",
  fontWeight: "500",
  maxWidth: "800px",
  "@media screen and (max-width:768px)": {
    textAlign: "center",
  },
});
export const UnparalleledMainContainer = styled(Grid)({});
export const UnparalleledGridItem = styled(Grid)({
  marginBottom: "20px",
  marginTop: "100px",
});
export const UnparalleledContentContainer = styled(Typography)({
  width: "95%",
  margin: "auto",
  borderRadius: "10px",
  padding: "20px",
  fontFamily: "'Inter'",
  img: {
    minWidth: "240.15px",
    minHeight: "221.71px",
    "@media (max-width: 1024px)": {
      minWidth: "200px",
      maxHeight: "200px",
    },
  },
});
export const OrangeText = styled(Typography)({
  color: "#DFBC6D",
  fontWeight: "500",
  fontSize: "14px",
  marginBottom: "30px",
  width: "100%",
  fontFamily: "'Inter'",
  lineHeight: "17px",
});

export const UnparalleledMainText = styled(Typography)({
  color: "#003565",
  fontSize: "32px",
  fontWeight: "400",
  lineHeight: "38.73px",
  fontFamily: "'Inter'",
  width: "90%",

  "@media (max-width: 1024px)": {
    fontSize: "28px",
  },
});
export const UnparalleledSubText = styled(Typography)({
  color: "#444444",
  fontSize: "16px",
  fontWeight: "300",
  fontFamily: "'Inter'",
  lineHeight: "24px",
  width: "90%",
  "@media (max-width: 800px)": {
    fontSize: "14px",
  },
  "@media screen and (max-width:768px)": {
    margin: "auto",
    textAlign: "center",
  },
});

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const ImageHere = styled("img")<{ animate?: boolean }>(
  ({ animate }) => ({
    animation: `${animate ? `${slideIn} 0.5s ease-in-out` : "none"}`,

    width: `100%`,
    height: "100%",
    paddingTop: "50px",
  })
);
