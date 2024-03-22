import { backdropClasses, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const NotificationPageContainer = styled(Box)(() => ({
  width: "100%",
  minHeight: "100vh",
  padding: "70px",
  display: "flex",
  flexDirection: "row",
  gap: "30px",
  background: "#fff",
}));

export const NotificationSectionCardsWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  padding: "20px",
}));

export const NotificationCardWrapper = styled(Box)(
  ({ isSelected }: { isSelected: boolean }) => ({
    height: "128px",
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    padding: "30px 10px",
    position: "relative",
    background: `${isSelected ? "#F8F8F8" : "#fff"}`,
    ":hover": {
      background: "#F8F8F8",
    },
    ":after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "1px",
      background: "#C4C4C4",
      bottom: "0",
      left: "0",
    },
    img: {
      borderRadius: "50%",
    },
  })
);

export const NotificationCardBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
}));

export const NotificationCardTitleWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  h5: {
    fontFamily: "Inter",
    fontSize: "0.875rem;",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    color: "var(--gray-900, #111827)",
  },
  p: {
    overflow: "hidden",
    color: "color: var(--gray-500, #6B7280)",
    textOverflow: "ellipsis",
    fontFamily: "Inter",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
  },
}));

export const NotificationCardBody = styled(Typography)(() => ({
  overflow: "hidden",
  color: "color: var(--gray-500, #6B7280)",
  textOverflow: "ellipsis",
  fontFamily: "Inter",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "20px",
  display: "-webkit-box",
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": "2",
  alignSelf: "stretch",
}));

export const NotificationDetailsContainer = styled(Box)(() => ({
  width: "100%",
  padding: "20px",
  position: "relative",
  borderLeft: "2px dotted #C4C4C4",
}));

export const NotificationDetailsSection = styled(Box)(() => ({}));

export const NotificationDetailsStatusTypo = styled(Typography)(() => ({
  paddingTop: "25px",
  color: "var(--gray-900, #111827)",
  fontFamily: "Inter",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "25px",
}));

export const NotificationDetailsText = styled(Typography)(() => ({
  color: "var(--gray-500, #6B7280)",
  fontFamily: "Inter",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "28px",
  textAlign: "justify",
}));

export const NotifierInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  position: "relative",
  paddingBottom: "30px",
  img: {
    borderRadius: "12px",
  },
  ":after": {
    content: '""',
    width: "100%",
    height: "1px",
    background: "#C4C4C4",
    left: "0",
    bottom: "0",
    position: "absolute",
  },
}));
