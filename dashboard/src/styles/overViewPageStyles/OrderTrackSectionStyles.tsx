import { Box, Button, styled, Typography } from "@mui/material";

export const OrderTrackSectionContainer = styled(Box)(
  ({ isVisible }: { isVisible: Boolean }) => ({
    width: "45%",
    borderLeft: "3px dotted #E3E3E3",
    padding: "70px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    transform: "translateX(0)",
    transition: "transform 0.3s ease-in-out",
    "@media (max-width: 1200px)": {
      position: "fixed",
      top: 0,
      right: 0,
      width: "300px",
      height: "100%",
      padding: "20px",
      borderLeft: "none",
      borderRight: "3px dotted #E3E3E3",
      backgroundColor: "#fff",
      zIndex: 999,
      overflowY: "auto",
      transform: `${isVisible ? "translateX(0%)" : "translateX(100%)"}`,
    },
  })
);

export const OrderTrackingCloseBtnWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
  button: {
    display: "none",
    svg: {
      path: {
        color: "#000000",
      },
    },
  },
  "@media (max-width: 1200px)": {
    button: {
      display: "block",
    },
  },
}));

export const StyledOrderTypoGraphy = styled(Typography)({
  color: "#14263E",
  fontFamily: "Inter",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
});

export const ProgressMapBtnStyle = styled(Button)(() => ({
  width: "100%",
  padding: "15px 0px 17px 0px",
  color: "#FFF",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  borderRadius: "8px",
  textTransform: "none",
  background: "#003565",
  ":hover": {
    background: "#003465e8",
  },
}));

export const StyledOrderActionWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  a: {
    color: "#003565",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "36px",
  },
}));
