import {
  Box,
  Button,
  Input,
  InputBase,
  Link,
  Typography,
  styled,
} from "@mui/material";

export const LoginContainer = styled(Box)({
  height: "100%",
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const LoginWrapper = styled(Box)(({ theme }) => ({
  width: "30%",
  margin: "auto",
  padding: "50px 50px 30px 50px",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  background: "#fff",
  boxShadow: "2px 4px 13px 0px #0000001A",
  flexDirection: "column",
  gap: "15px",

  [theme.breakpoints.down("lg")]: {
    width: "50%",
  },
  [theme.breakpoints.down("md")]: {
    width: "60%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "85%",
    padding: "50px 40px 30px 40px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "95%",
  },
}));

export const LoginBtn = styled(Button)({
  height: "51px",
  fontWeight: "700",
  fontSize: "1rem",
  background: "#003565",
  color: "#ffff",
  width: "100%",
  padding: "10px",
  textTransform: "none",
  ":hover": {
    background: "#003565",
  },
});

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: "300",
  lineHeight: "36px",
  letterSpacing: "0px",
  "& .MuiInputBase-input": {
    height: "51px",
    padding: "0 5px",
    borderRadius: "4px",
    border: "1.5px solid #A6A6A6",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderColor: "#007bff",
      boxShadow: `${theme.shadows[1]} 0 0 0 0.2rem rgba(0,123,255,.25)`,
    },
  },
}));

export const LoginTitleWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginBottom: "18px",
  gap: "5px",
  h1: {
    fontFamily: "Inter",
    fontSize: "24px",
    fontWeight: "500",
    lineHeight: "29px",
    letterSpacing: "0em",
    textAlign: "center",
  },
  p: {
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: "300",
    lineHeight: "36px",
    letterSpacing: "0px",
    textAlign: "center",
  },
});

export const StyledOrTypo = styled(Typography)({
  margin: "18px 0",
  textAlignment: "center",
  width: "100%",
  fontSize: "10px",
  fontWeight: "400",
  lineHeight: "16px",
  letterSpacing: "0px",
  textAlign: "center",
  position: "relative",
  "::before, ::after": {
    content: '""',
    position: "absolute",
    height: "1px",
    width: "45%",
    background: "gray",
    top: "50%",
    transform: "translateY(-50%)",
  },
  "::before": {
    left: 0,
  },
  "::after": {
    right: 0,
  },
});

export const StyledGoogleLoginBtn = styled(Button)({
  cursor: "pointer",
  fontFamily: "Inter",
  textTransform: "none",
  color: "#636164",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "17px",
  letterSpacing: "0em",
  textAlign: "left",
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  borderRadius: "5px",
  alignItems: "left",
  justifyContent: "left",
  padding: "10px",
  border: "0.5px solid #A6A6A6",
});

export const StyledForgetPass = styled(Link)({
  fontFamily: "Inter",
  fontSize: " 14px",
  fontWeight: "700",
  lineHeight: "36px",
  letterSpacing: "0px",
  textAlign: "left",
  color: " #5A6E83",
  cursor: "pointer",
  margin: "20px 0",
  textDecoration: "none",
});

export const StyledSignUpTypo = styled(Typography)({
  margin: "20px 0",
  a: {
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "36px",
    letterSpacing: "0px",
    cursor: "pointer",
  },
  fontSize: "14px",
  fontWeight: "300",
  lineHeight: "36px",
  letterSpacing: "0px",
});
