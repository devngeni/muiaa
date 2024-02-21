import { Box, Button, styled } from "@mui/material";

interface commonStylesProps {
  isFooterRendered?: boolean;
}

export const PageWrapper = styled(Box)<commonStylesProps>((props) => ({
  main: {
    width: "100%",
    minHeight: props.isFooterRendered
      ? "calc(100vh - (66px + 89px))"
      : "calc(100vh - 66px)",
  },
}));

export const TextButtons = styled(Button)(() => ({
  textTransform: "none",
  fontFamily: "Inter",
  fontWeight: 400,
  height: "38px",
  fontSize: "16px",
  color: "#FFFFFF",

  ":hover": {
    backgroundColor: "transparent",
  },
}));

export const GrayButton = styled(Button)(() => ({
  textTransform: "none",
  fontFamily: "Inter",
  height: "38px",
  fontWeight: 400,
  fontSize: "16px",
  color: "#FFFFFF",
  borderRadius: "4px",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  minWidth: "0px",

  ":hover": {
    backgroundColor: "#5F5F5F",
  },

  "&.Button_before": {
    img: {
      width: "20px",
      height: "20px",
    },

    "::before": {
      position: "absolute",
      content: "''",
      width: "5px",
      height: "5px",
      backgroundColor: "#E8AD4B",
      top: "4px",
      right: "5px",
      borderRadius: "50%",
    },
  },
}));
