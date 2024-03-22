import { Box, styled } from "@mui/material";

export const NavbarContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#14263E",
  color: "#FFFFFF",
  padding: "0 100px",
  height: "66px",

  ".navbar_items": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  ".logo": {
    width: "138.86px",
    height: "46.29px",
    cursor: "pointer",
    img: {
      width: "100%",
      height: "100%",
    },
  },
  ".menu-icon-mobile": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  "@media (max-width: 1535px)": {
    padding: "0 5%",
  },
  "@media (max-width: 1370px)": {
    padding: "0 10px",
  },

  "@media (max-width: 1000px)": {
    padding: "0 10px",
  },

  "@media (min-width: 1001px)": {
    ".menu-icon-mobile": {
      display: "none",
    },
  },
}));

export const SearchContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  width: "898px",
  height: "38px",
  borderRadius: "10px",
  background: "rgba(255, 255, 255, 0.2)",
  padding: "0 20px",

  ".icon": {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    img: {
      height: "25px",
      width: "25px",
    },
  },

  input: {
    background: "transparent",
    width: "100%",
    height: "100%",
    padding: "0 20px",
    border: "none",
    outline: "none",
    color: "#AAA8A7",
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 400,
  },

  "@media (max-width: 1535px)": {
    width: "600px",
  },
  "@media (max-width: 1370px)": {
    width: "500px",
  },
  "@media (max-width: 1200px)": {
    width: "400px",
  },
}));

export const DropDownModalStyles = styled(Box)(() => ({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  // height: "100%",
  left: 0,
  top: 0,
  zIndex: 999,
  background: "rgba(0, 0, 0, 0.4)",
  marginTop: "66.5px",

  ".buttons-wrapper": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#14263E",
    gap: "10px",
    padding: "20px",
  },
  "@media (min-width: 1001px)": {
    display: "none",
  },
}));
