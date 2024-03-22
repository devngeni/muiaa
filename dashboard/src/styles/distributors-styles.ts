import { Box, Grid, styled } from "@mui/material";

export const DistroMainContainer = styled(Box)({
    width:"100%",
    height:"30vh",
    backgroundImage:"url('https://source.unsplash.com/1000x400/?cows')",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
})
export const DistroSUbContainer = styled(Box)({
    width:"100%",
    height:"100%",
    backgroundColor: "rgb(0, 53, 101, 0.5)",
    display:"flex",
    alignItems:"center",
    textAlign:"center",

})
export const DistroItemsContainer = styled(Grid)({
    maxWidth:"1300px",
    margin:"auto"
})
export const DistroItem = styled(Grid)({
    minHeight:"100px",
    marginBottom:"40px"
})
export const DistroBgMain = styled(Box)({
  width: "90%",
  margin: "auto",
  backgroundImage: "url('https://source.unsplash.com/1000x400/?warehouse')",
  minHeight:"250px",
  borderRadius:"10px",
  overflow:"hidden"
});
export const DIstroBgMask = styled(Box)({
  width: "100%",
  height: "250px",
  backgroundColor: "rgb(0, 53, 101, 0.5)",
  padding:"20px"
});