import { Box, Button, styled } from "@mui/material";

export const NavbarContainer = styled(Box)({
    width:"100vw",
    height:"100px",
    backgroundColor:"#14263E",
})
export const NavbarMiniContainer = styled(Box)({
    width:"90%",
    margin:"auto",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    height:"100%",
})
export const NavbarLinksContainer = styled(Box)({
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    height:"100%",
    width:"30%",
})

export const NavBarButtonsContainer = styled(Box)({
    width:"20%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    height:"100%",
})

export const NavButton = styled(Button)({
    border:"1px solid white",
    color:"white",
    borderRadius:"5px",
    width:"150px",
    height:"40px",
})
export const NavButton2 = styled(NavButton)({
    color: "#DFBC6D",
    border: "2px solid #DFBC6D",
});