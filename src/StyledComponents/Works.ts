import { Box, Grid, styled } from "@mui/material";


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