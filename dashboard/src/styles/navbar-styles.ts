import { Box, styled } from "@mui/material";

export const NavbarContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#14263E",
  color: "#FFFFFF",
  padding: "10px 20px",
  height: "99px",

  ".navbar_items": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  ".logo": {
    svg: {},
  },
}));
