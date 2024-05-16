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
  justifyContent: "space-around",
  alignItems: "center",
  height: "100%",
});

export const NavButton = styled(Button)({
  border: "1px solid white",
  color: "white",
  borderRadius: "5px",
  width: "40%",
  height: "40px",
  fontSize: "16px",
  fontWeight: "600",
  "@media screen and (max-width:1024px)": {
    width: "fit-content",
    fontSize: "14px",
  },
  "&:hover": {
    background: "#E9BC6D",
    color: "#003565",
    border: "none",
  },
});
export const NavButton2 = styled(NavButton)({
  color: "#DFBC6D",
  border: "2px solid #DFBC6D",
  width: "40%",
  textAlign: "center",
});
