import { Box, styled } from "@mui/material";

interface commonStylesProps {
  isFooter?: boolean;
}

export const PageWrapper = styled(Box)<commonStylesProps>((props) => ({
  main: {
    width: "100%",
    minHeight: !props.isFooter ? "calc(100vh - 188px)" : "calc(100vh - 89px)",
  },
}));
