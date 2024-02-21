import { Box, Button, Grid, styled } from "@mui/material";

export const NavbarContainer = styled(Box)({
    width:"100vw",
    height:"100px",
    backgroundColor:"#14263E",
})
export const NavbarMiniContainer = styled(Grid)({
    width:"90%",
    margin:"auto",
    justifyContent:"space-between",
    alignItems:"center",
    height:"100%",
})
export const NavbarLogoItem  = styled(Grid)({

})
export const NavbarLinksContainer = styled(Grid)({
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    height:"100%",
    width:"30%",
})

export const NavBarButtonsContainer = styled(Grid)({
    width:"20%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    height:"100%",
})

export const NavButton = styled(Button)({
  border: "1px solid white",
  color: "white",
  borderRadius: "5px",
  width: "40%",
  height: "40px",
  fontSize: "10px",
  fontWeight:"900",
  "&:hover": {
    background: "#E9BC6D",
    color: "#003565",
    border:"none",
  },
});
export const NavButton2 = styled(NavButton)({
    color: "#DFBC6D",
    border: "2px solid #DFBC6D",
    width:"40%",
    textAlign:"center",
});
