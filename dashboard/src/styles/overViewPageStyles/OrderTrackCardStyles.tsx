import { Box, Button, styled, Typography } from "@mui/material";

export const StyledTrackOrderCardContainer = styled(Box)(() => ({
  borderRadius: "0.625rem",
  background: "#FFF",
  boxShadow: "0px 4px 8.1px 0px rgba(0, 0, 0, 0.10)",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    transform: "scale(1.01)",
  },
}));

export const StyledOrderTrackCardTitleMainWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  paddingBottom: "14px",
  ":after": {
    content: `""`,
    width: "100%",
    height: "1px",
    background: "#C4C4C4",
    position: "absolute",
    bottom: "0px",
    left: "0px",
  },
}));
export const StyledOrderTrackCardTitleSubWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
  h5: {
    color: "#003565",
    fontSize: "1.125rem",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  },
}));

export const StyledPersonInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  alignItems: "center",
  h5: {
    color: "#444",
    fontFamily: "Inter",
    fontSize: "0.87rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  },
  p: {
    color: "#6D6D6D",
    fontFamily: "Inter",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
}));

export const StyledNotStartedContainer = styled(Box)(() => ({
  height: "52px",
  padding: "15px 18.229px 11.989px 25px",
  borderRadius: "10px",
  border: " 0.5px solid #C4C4C4",
  background: "rgba(255, 255, 255, 0.15)",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  p: {
    color: "#8E8E8E",
    fontFamily: "Inter",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
}));

export const StyledOrderTrackDescTypography = styled(Typography)(() => ({
  color: "#6D6D6D",
  fontFamily: " Inter",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: " 23px",
}));

export const StyledTimestampTypography = styled(Typography)(() => ({
  color: "#444",
  fontFamily: "Inter",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
}));
