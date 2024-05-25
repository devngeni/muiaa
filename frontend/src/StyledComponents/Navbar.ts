import { Box, Button, Grid, styled } from "@mui/material";
import { transform } from "next/dist/build/swc";

export const NavbarContainer = styled(Box)({
  width: "100vw",
  height: "100px",
  backgroundColor: "#14263E",
});
export const NavbarMiniContainer = styled(Grid)({
  width: "90%",
  margin: "auto",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
});
export const NavbarLogoItem = styled(Grid)({
  "@media screen and (max-width:890px)": {
    overflow: "hidden",
    height: "100%",
    maxHeight: "100px",
    img: {
      height: "100%",
    },
  },
  "@media screen and (max-width:600px)": {
    height: "auto",
    img: {
      height: "100%",
    },
  },
});
export const NavbarLinksContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  height: "100%",
  width: "30%",
  a: {
    position: "relative",
    fontSize: "18px",
    "&.active": {
      color: "#FFDE59 ",
      fontWeight: "700",
    },
    "::after": {
      position: "absolute",
      left: 0,
      bottom: -4,
      content: "''",
      display: "block",
      height: "2px",
      width: "100%",
      background: "#FFDE59",
      transition: "all 0.3s ease-in-out",
      transform: "scaleX(0)",
    },
    "&:hover": {
      color: "#FFDE59",
      "::after": {
        transform: "scaleX(1)",
      },
    },
  },
});

export const NavBarButtonsContainer = styled(Grid)({
  width: "20%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "30px",
  alignItems: "center",
  height: "100%",
});

export const NavButton = styled(Button)({
  color: "white",
  borderRadius: "5px",
  width: "35%",
  height: "50px",
  fontSize: "20px",
  fontWeight: "600",
  textTransform: "none",
  background: "#033D66",
  "@media screen and (max-width:1024px)": {
    width: "fit-content",
    fontSize: "14px",
  },
  "&:hover": {
    background: "#072e4a",
    border: "1px solid #ffff",
  },
});
export const NavButton2 = styled(NavButton)({
  color: "#DFBC6D",
  border: "2px solid #DFBC6D",
  width: "35%",
  textAlign: "center",
  background: "#072e4a",
  "&:hover": {
    background: "#ffff",
    color: "#072e4a",
  },
});
