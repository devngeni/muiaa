import { Box, styled } from "@mui/material";


export const WorksMainHero = styled(Box)({
    width:"100vw",
    height:"auto",
    minHeight:"30vh",
    backgroundImage:"url(assets/WorksHerobg.svg)",
    backgroundSize:"cover",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundAttachment:"scroll",
    // overlay background color over the image
})
export const BgOverlay = styled(Box)({
    width:"100%",
    height:"30vh",
    backgroundColor:"rgba(0, 53, 101, 0.8)",
    display:"flex",
    alignItems:"center",
})

