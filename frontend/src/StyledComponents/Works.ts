import {
  Box,
  Grid,
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";


export const WorksMainHero = styled(Box)({
    width:"100vw",
    height:"auto",
    minHeight:"30vh",
    backgroundImage:"url(assets/works-hero.png)",
    backgroundSize:"cover",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundAttachment:"scroll",
    // overlay background color over the image
})
export const BgOverlay = styled(Box)({
    width:"100%",
    height:"auto",
    display:"flex",
    alignItems:"center",
})
export const PlatformContainer = styled(Grid)({
    width:"100%",
    display:"flex",
    background:"#14263E",
})
export const PLatformItem = styled(Grid)({
})
export const WhiteBox  = styled(Box)({
    width:"100%",
    maxWidth:"800px",
    height:"400px",
    background:"#fff",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding:"50px",
    borderTopRightRadius:"150px",
})
export const Part = styled(Box)({
  width: "100%",
  height: "auto",
  minHeight: "35vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "url(assets/works-hero.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});
export const  BlueSection = styled(Box)({
    width:"100%",
    height:"auto",
    minHeight:"35vh",
    background:"#14263E",
    display:"flex",
    flexDirection:'column',
    justifyContent:"center",
    alignItems:"center",
    padding:"50px",
})

export const WhiteBackgroundAccordion = styled(Accordion)({
  backgroundColor: "white",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)", // Optional: Add shadow for a better visual effect
  padding: "10px 20px",
  marginBottom: "30px",
  borderRadius: "10px",
  width:"90vw",
  maxWidth: "1000px",
});

export const WhiteBackgroundAccordionSummary = styled(AccordionSummary)({
  // Add any specific styles for the AccordionSummary if needed
});

export const WhiteBackgroundAccordionDetails = styled(AccordionDetails)({
  // Add any specific styles for the AccordionDetails if needed
});

export const AccordionText = styled(Typography)({
  color: "#003565",
  fontWeight: "bold",
    fontSize: "22px",
  fontFamily: "'Inter'",
});
export const AccordionText2 = styled(Typography)({
  color: "#003565",
  fontWeight: "400",
  fontSize: "18px",
  fontFamily: "'Inter'",
});

export const AccordionText3 = styled(Typography)({
});