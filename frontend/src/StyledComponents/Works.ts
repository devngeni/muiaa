import { Padding } from "@mui/icons-material";
import {
  Box,
  Grid,
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { OrangeText } from "./HomeHero";


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
    background:"#033D66",
    padding:"1rem",
    justifyContent:"center",
    '@media (max-width: 768px)': {
      padding:'1rem 0.5rem 1rem 0',
    
    },
})
export const PLatformItem = styled(Grid)({
})
export const StepContainer = styled(Box)({
  display:"flex",
  padding:"2rem",
  flexWrap:"wrap",
  gap: "2rem",
  maxWidth:"1200px",
  width:"100%",
  '@media (max-width: 768px)': {
    gap:'1rem',
    padding: 0,
    justifyContent:'center'    
  },

})
export const StepBox = styled(Box)({
  flexBasis: "calc(33.333% - 21.5px)",
  background:"white",
  padding:"2rem",
  borderRadius:"20px",
  '@media (max-width: 768px)': {
    padding:'1rem',
    flexGrow:0
  
  },

  '@media (max-width: 480px)': {
    flexBasis: 'calc(100% - 21.5px)', 
    padding:'1rem'
  },
})
export const ImageContainer = styled(Box)({
  maxWidth: '100%', 
  maxHeight: '100%', 
  overflow: 'hidden' 
  
})
export const Subtitle = styled(Typography)({
  color:"#fff",
  fontSize:"3rem",
  fontWeight:400,
  textAlign:"center",
  fontFamily:"inter",
  '@media(min-width:768px)':{
    width:"100%",
  },
  '@media(max-width:480px)':{
    fontSize:"1.5rem",
    paddingBottom:"1rem"
  }
  
})
export const StepTitle = styled(Typography)({
  color:"#003565",
  fontSize:"1.2rem",
  fontWeight:500
  
})
export const StepText = styled(Typography)({
  color:"#444444",
  fontSize:"1rem"
  
})
export const OrangeText1 = styled(OrangeText)({
  fontSize:"3rem", 
  '@media(max-width:480px)':{
    fontSize:"1.5rem",
  }
})
export const BlueText = styled(Subtitle)({
  color:"#14263E"
})
export const CarouselDescText = styled(BlueText)({
  color:"#1A1A1A",
  fontSize:"1.75rem"
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
    maxWidth:"100%",
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

export const CarouselIntro = styled(Box)({
  display:"flex",
  justifyContent: "center", 
    alignItems: "center", 
    width: "100%", 
    textAlign: "center", 
    padding: { md: "50px", xs: "20px" } 
});
export const CarouselIntroWrapper = styled(Box)({
  width:"45%",
  padding:"1rem 1rem 0",
   '@media(max-width:480px)':{width:"100%"}
})