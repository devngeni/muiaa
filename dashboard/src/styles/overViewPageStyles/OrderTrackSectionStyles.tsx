import { BorderLeft, BorderRight } from "@mui/icons-material";
import { Box, Button, keyframes, styled, Typography } from "@mui/material";

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const OrderTrackSectionContainer = styled(Box)(
  ({ isSectionVisible }: { isSectionVisible: boolean }) => ({
    width: isSectionVisible ? "45%" : "0",
    borderLeft: isSectionVisible ? "3px dotted #E3E3E3" : "none",
    padding: "70px",
    flexDirection: "column",
    gap: "30px",
    transition: "all 0.3s ease-in-out",
    animation: `${isSectionVisible ? slideIn : slideOut} 0.5s ease-in-out`,
    display: isSectionVisible ? "flex" : "none",
    "@media screen and (max-width: 1200px)": {
      position: "fixed",
      top: 0,
      right: 0,
      width: "300px",
      height: "100%",
      padding: "20px",
      borderLeft: "none",
      backgroundColor: "#fff",
      zIndex: 999,
      overflowY: "auto",
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
