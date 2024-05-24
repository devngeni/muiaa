import {
  Box,
  Button,
  Grid,
  Typography,
  keyframes,
  styled,
} from "@mui/material";

export const AboutContainer = styled(Box)({});

export const AboutHeroContainer = styled(Box)<{
  bgImgUrl: string;
  opacity: number;
}>(({ bgImgUrl, opacity }) => ({
  width: "100%",
  // backgroundImage: "url('/assets/aboutUsBG.jpeg')",
  height: "90vh",
  position: "relative",
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bgImgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "opacity 0.5s ease-in-out",
    opacity: opacity,
    zIndex: 1,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#00356569",
    zIndex: 2,
  },
}));

export const AboutHeroMask = styled(Box)({
  height: "100%",
  width: "100%",
  position: "relative",
  zIndex: 3,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const AboutStyledText = styled(Typography)({
  fontFamily: "Inter",
  fontWeight: "500",
  color: "#ffff",
  lineHeight: "72.61px",
  fontSize: "16px",
  textAlign: "center",
});

export const AboutStyledExpertBtn = styled(Button)({
  background: "#E9BC6D",
  color: "#ffff",
  textTransform: "none",
  padding: "10px",
  fontSize: "20px",
  fontWeight: "700",
  marginTop: "70px",
  "&:hover": {
    background: "#e9bc6dd4",
  },
});

export const AboutPageTeamWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  img: {
    borderRadius: "10px",
    filter: "grayscale(100%)",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      filter: "grayscale(0%)",
    },
  },
});

export const TeamSocialIconsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  marginTop: "8px",
  a: {
    svg: {
      width: "22px",
      height: "22px",
    },
    "&:hover": {
      transform: "scale(1.1)",
      svg: {
        path: {
          fill: "#0077B5",
        },
      },
    },
  },
});

export const FormFieldWrapper = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginTop: "20px",
});

export const StyledLabel = styled("label")({
  color: "#374151",
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: "500",
  marginBottom: "5px",
  lineHeight: "20px",
});

export const StyledInputField = styled("input")({
  height: "50px",
  width: "100%",
  padding: "10px",
  background: "#F0F0F0",
  fontSize: "14px",
  fontWeight: "400",
  borderRadius: "5px",
  border: "1px solid #A6A6A6",
});

export const StyledTextAreaField = styled("textarea")({
  minHeight: "176px",
  width: "100%",
  padding: "10px",
  background: "#F0F0F0",
  fontSize: "14px",
  fontWeight: "400",
  borderRadius: "5px",
  border: "1px solid #A6A6A6",
  resize: "none",
});

export const CountrySelectorLabelWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  span: {
    fontWeight: "400",
    fontSize: "12px",
    color: "#2C2C2E",
  },
});

export const ContactFormSubmitBtn = styled(Button)({
  minHeight: "60px",
  background: "#033D66",
  fontSize: "20px",
  fontWeight: "600",
  color: "#FFFFFF",
  textTransform: "none",
  marginTop: "60px",
  "&:hover": {
    background: "#033D66d4",
  },
});

export const ContractTileBox = styled(Box)({
  background: "#F0F0F0",
});

export const PartnerCarousel = styled("div")({
  display: "flex",
  overflow: "hidden",
  whiteSpace: "nowrap",
  paddingBottom: "70px",
  width: "100%",
  justifyContent: "center",
  gap: "20px",
});

const scroll = keyframes`
 0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const PartnerCarouselItem = styled("div")(({ theme }) => ({
  display: "inline-block",
  padding: theme.spacing(1),
  animation: `${scroll} 20s linear infinite`,
}));
