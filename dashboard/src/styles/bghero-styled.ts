import { Box, Typography, styled, Button } from "@mui/material";

export const BgHeroContainer = styled(Box)({
  width: "100vw",
  maxWidth: "1300px",
  height: "400px",
  backgroundImage: "url('https://source.unsplash.com/1000x1000/?cows')",
  margin: "auto",
  marginTop: "20px",
  minHeight: "20vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "10px",
  overflow: "hidden",
});
export const BgHeroMask = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundColor: "rgb(0, 53, 101, 0.5)",
  position:"relative"
});
 // bgHeroTitle  Copy Width 1591px Height 503px Top 208px Left 165px Radius 10px
export const BgHeroTitle = styled(Box)({
  borderRadius: "10px",
  color: "#fff",
  fontSize: "36px",
  fontWeight: "900",
});
export const  HeroMiniText = styled(Typography)({
    color: "#fff",
    fontSize: "14px",
    fontWeight: "300",
    fontFamily: "'Inter'",
    maxWidth:"600px"
});
//button Flex container
export const ButtonContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  padding: "20px",
});
// orange BUtton
export const OrangeButton = styled(Button)({
  backgroundColor: "#E8AD4B",
  color: "#fff",
  borderRadius: "5px",
  padding: "10px 20px",
  textTransform: "none",
  transition: "0.3s smooth ease-in-out",
  ":hover": {
    backgroundColor: "#14263E",
    color: "#E8AD4B",
    transition: "0.3s smooth ease-in-out",
  },
});
export const GrayButton = styled(OrangeButton)({
  backgroundColor: "rgb(0,0,0,0.3)",
});