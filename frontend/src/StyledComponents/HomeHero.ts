import { styled, Grid, Box, Typography, Button } from "@mui/material";
import {keyframes} from "@mui/system"

const baseFontSize = {
  fontSize: "16px", // Set a base font size for default screens
};
//


export const HomeMainContainer = styled(Box)({
  backgroundImage: "linear-gradient(to right, #033D66, #14263E)",
});

const spin = keyframes`
0%{
  background-image: url(./assets/bgIMage.svg);
}
50%{
  background-image: url(./assets/bgIMage2.svg);
}
100%{
  background-image: url(./assets/bgIMage.svg);
}
`
export const HeroMainContainer = styled(Grid)({
  width: "100vw",
  height: "80vh",
  backgroundImage: "url(./assets/bgIMage.svg)", // Initial background image
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  // animation: `${backgroundChange} 10s linear infinite`, // 10s duration, linear timing, infinite loop
  // animation: `${spin} 10s linear infinite`,
  "@media (max-width: 600px)": {
    height: "100vh",
  },
  "@media (max-width: 500px)": {
    height: "130vh",
  },
  "@media (max-width: 400px)": {
    height: "100vh",
  },
});
export const BgMask = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundImage:
    "linear-gradient(to right, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 80%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
export const ContentContainer = styled(Box)({
  width: "100%",
  maxWidth: "1400px",
  height: "500px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
export const HeroMainText = styled(Typography)({
  ...baseFontSize,
  fontSize: "60px",
  fontWeight: "900",
  color: "#1A1A1A",
  textAlign: "left",
  width: "80%",
  lineHeight: "96px",
  fontFamily: "'Inter'",
  "@media (max-width: 600px)": {
    fontSize: "40px", // Adjust for smaller screens
    lineHeight: "48px",
    margin: "auto",
  },
});
export const HeroMiniText = styled(Typography)({
  fontSize: "24px",
  fontWeight: "300",
  fontFamily: "'Inter'",
  color: "#1A1A1A",
  textAlign: "left",
  width: "70%",
  "@media (max-width: 600px)": {
    margin: "auto",
  },
});
export const BlueButton = styled(Button)({
  border: "none",
  color: "#fff",
  borderRadius: "5px",
  width: "90%",
  height: "50px",
  fontSize: "20px",
  background: "#033D66",
  fontWeight: "bold",
  textTransform: "capitalize",
  "&:hover": {
    background: "#E9BC6D",
    color:"#003565",
  },
});
export const OrangeButton = styled(BlueButton)({
  background: "#DFBC6D",
  "&:hover": {
    background: "#003565",
    color: "#E9BC6D",
  },
});
export const NavyStatContainer = styled(Box)({
  backgroundColor: "#fff",
  width: "80%",
  maxWidth: "1400px",
  margin: "auto",
  borderRadius: "10px",
  marginTop: "-100px",
  paddingBottom:"20px",
  zIndex: 503,
});
export const NavyStatGridContainer = styled(Grid)({
  width: "100%",
  height: "100%",
});
export const NavyStatItem = styled(Grid)({
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "20px",
  fontWeight: "900",
});
export const NavyNumber = styled(Typography)({
  fontSize: "48px",
  fontWeight: "bold",
  color: "#003565",
  width: "90%",
  margin: "auto",
  fontFamily: "'Inter'",
});
export const NavyText = styled(Typography)({
  fontSize: "24px",
  fontWeight: "300",
  color: "#003565",
  fontFamily: "'Inter'",
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
  marginTop:"80px",
});
export const WhiteText = styled(Typography)({
  color: "#fff",
  fontWeight: "bold",
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
  fontSize: "60px",
  color: "#1A1A1A",
  textAlign: "left",
  width: "80%",
  letterSpacing: "-3px",
  fontFamily: "'Inter'",
});
export const UnparalleledMainContainer = styled(Grid)({
})
export const UnparalleledGridItem = styled(Grid)({
    marginBottom:"30px",
})
export const UnparalleledContentContainer = styled(Typography)({
  width: "95%",
  margin: "auto",
  // border: "1px solid #000",
  // backgroundColor: "#F5F6F7",
  borderRadius: "10px",
  padding: "20px",
  minHeight: "360px",
  fontFamily: "'Inter'",
});
export const OrangeText = styled(Typography)({
  color: "#DFBC6D",
  fontWeight: "500",
  fontSize: "14px",
  marginBottom: "30px",
  width: "100%",
  fontFamily: "'Inter'",
});

export const UnparalleledMainText = styled(Typography)({
  color: "#003565",
  fontSize: "28px",
  fontWeight: "500",
  lineHeight: "32px",
  fontFamily: "'Inter'",
  width: "90%",
  "@media (max-width: 600px)": {
    fontSize: "20px",
  },
});
export const UnparalleledSubText = styled(Typography)({
  color: "#444444",
  fontSize: "16px",
  fontWeight: "300",
  fontFamily: "'Inter'",
  lineHeight: "21px",
  width: "90%",
  "@media (max-width: 800px)": {
    fontSize: "12px",
  },
});