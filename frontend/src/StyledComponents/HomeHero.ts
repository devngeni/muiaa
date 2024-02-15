import { styled, Grid, Box, Typography, Button } from "@mui/material";

const baseFontSize = {
  fontSize: "16px", // Set a base font size for default screens
};
//


export const HomeMainContainer = styled(Box)({
  backgroundImage: "linear-gradient(to right, #033D66, #14263E)",
});
export const HeroMainContainer = styled(Grid)({
  width: "100vw",
  height: "80vh",
  backgroundImage: "url(./assets/bgIMage.svg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  "@media (max-width: 600px)": {
    height: "100vh",
  },
});
export const BgMask = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundImage:
    "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // Add a mask to the background image
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
  fontSize: "80px",
  fontWeight: "bold",
  color: "#1A1A1A",
  textAlign: "left",
  width: "80%",
  lineHeight: "96px",
  "@media (max-width: 600px)": {
    fontSize: "40px", // Adjust for smaller screens
    lineHeight: "48px",
    margin:"auto",
  },
});
export const HeroMiniText = styled(Typography)({
  fontSize: "24px",
  fontWeight: "300",
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
});
export const OrangeButton = styled(BlueButton)({
  background: "#DFBC6D",
});
export const NavyStatContainer = styled(Box)({
  backgroundColor: "#fff",
  width: "80%",
  maxWidth: "1400px",
  margin: "auto",
  borderRadius: "10px",
  minHeight: "200px",
  marginTop: "-100px",
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
  paddingTop: "30px",
  fontWeight: "900",
});
export const NavyNumber = styled(Typography)({
  fontSize: "65px",
  fontWeight: "bold",
  color: "#003565",
  width: "90%",
  margin: "auto",
});
export const NavyText = styled(Typography)({
  fontSize: "24px",
  fontWeight: "300",
  color: "#003565",
  width: "90%",
});
export const NavySection = styled(Box)({
  width: "100%",
  height: "auto",
  backgroundImage: "linear-gradient(to right, #033D66, #14263E)",
  minHeight: "400px",
  zIndex: 400,
});
export const NavyTextContainer = styled(Box)({
  width: "70%",
  maxWidth: "600px",
  margin: "auto",
  minHeight: "600px",
  backgroundImage: "url('./assets/Yodt.gif')",
  backgroundSize: "cover", // Adjust as needed
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  mixBlendMode: "screen",
  backgroundColor: "linear-gradient(to right, #033D66, #14263E)",
});
export const WhiteText = styled(Typography)({
  color: "#fff",
  fontWeight: "bold",
  width: "160%",
  margin: "auto",
  textAlign: "center",
  // marginLeft: "-30%",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
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
});
export const UnparalleledMainContainer = styled(Grid)({
})
export const UnparalleledGridItem = styled(Grid)({
    marginBottom:"30px",
})
export const UnparalleledContentContainer = styled(Typography)({
  width: "95%",
  margin: "auto",
  border: "1px solid #000",
  backgroundColor: "#F5F6F7",
  borderRadius: "10px",
  padding: "20px",
  minHeight:"360px",
});
export const OrangeText = styled(Typography)({
  color: "#DFBC6D",
  fontWeight: "500",
  fontSize: "14px",
  marginBottom:"30px",
  width:"100%",
});

export const UnparalleledMainText = styled(Typography)({
    color:"#003565",
    fontSize:"28px",
    fontWeight:"700",
    lineHeight:"32px",
    width:"90%",
})
export const UnparalleledSubText = styled(Typography)({
    color:"#003565",
    fontSize:"16px",
    fontWeight:"300",
    lineHeight:"21px",
    width:"90%",
})