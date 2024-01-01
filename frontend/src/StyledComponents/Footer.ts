import { Box, Typography, styled } from "@mui/material";

export const MainFooterContainer = styled(Box)({
  width: "100vw",
  height: "auto",
  backgroundColor: "#14263E",
  minHeight: "5vh",
  paddingTop: "70px",
  paddingBottom: "70px",
});

export const FooterText = styled(Typography)({
  color: "#fff",
  fontSize: "16px",
  fontWeight: "300",
  textAlign: "left",
  paddingLeft: "30px",
  paddingBottom: "10px",
  fontFamily: "'Inter'",
});
export const FooterHeader = styled(FooterText)({
    fontWeight: "bold",
})

export const MainFooterBox = styled(Box)({
  width: "100vw",
  height: "auto",
  backgroundColor: "#14263E",
  minHeight: "5vh",
  paddingTop: "70px",
  paddingBottom: "70px",
});

export const FooterTextBox = styled(Typography)({
  color: "#fff",
  fontSize: "16px",
  fontWeight: "300",
  textAlign: "left",
  paddingLeft: "30px",
  paddingBottom: "10px",
  fontFamily: "'Inter'",
});
export const FooterHeaderBox = styled(FooterText)({
    fontWeight: "bold",
})
