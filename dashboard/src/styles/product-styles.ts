import {Grid, Box, Typography, styled} from '@mui/material'


export const ProductContainer = styled(Grid)({  
    width: "100%",
    maxWidth: "1300px",
    margin: "auto",
    height: "auto",
    textAlign:"left",
});
export const ProductItem = styled(Grid)({
  width: "100%",
  color: "#E8AD4B",
  fontFamily: "'Inter'",
  fontSize: "20px",
  fontWeight: "700",
  letterSpacing: "1px",
  textTransform: "uppercase",
  paddingBottom:"30px",
});
export const ProductSubItem = styled(Box)({
  width: "90%",
  margin: "auto",
  padding: "10px",
  paddingBottom:"2px",
  boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
  borderRadius: "5px",
  transition: "0.3s smooth ease-in-out",
  ":hover": {
    backgroundColor: "rgba(100, 100, 111, 0.2)",
    color: "#14263E",
    transition: "0.3s smooth ease-in-out",
    cursor: "pointer", 
  },
});
export const ProductImage = styled('img')({
    width:"100%",
    height:"100%",
    maxHeight:"250px",
})
export const ProductText = styled(Typography)({
    color: "#000",
    fontFamily: "'Inter'",
    fontWeight:"600",
    margin:"15px 0",
});
export const ProductSubText = styled(Typography)({
    color: "#444444",
    fontFamily: "'Inter'",
    fontWeight:"400",
    fontSize:"14px",
    textTransform:"none",
    minHeight:"50px",

});
export const ProductFooterContainer = styled(Box)({
    width:"100%",
    height:"auto",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    gap:"10px",
    margin:"10px 0",
})
export const ProductMiniText = styled(Typography)({
  color: "#5A6E83",
  fontFamily: "'Inter'",
  fontWeight: "400",
  fontSize: "12px",
  textTransform: "none",
  margin: "10px 0",
});

export const ProductCategoryTitle = styled(Typography)({
    color: "#000",
    fontFamily: "'Inter'",
    fontSize: "20px",
    fontWeight: "700",
    letterSpacing: "1px",
    textTransform: "uppercase",
    margin:"30px auto",
    width:"100%",
    maxWidth:"1300px",
    paddingLeft:"20px",
});

export const ProductDetailLayoutContainer = styled(Grid)({
    width: "100%",
    maxWidth: "1300px",
    textAlign:"left",
    margin:"auto",
});
export const ProductDetailLayoutItem = styled(Grid)({
    width: "100%",
    padding: "20px",
    textAlign:"left",
});
export const ProductDetailContainer = styled(Grid)({
    width: "100%",
    maxWidth: "1300px",
    textAlign:"left",
})
export const ProductDetailItem = styled(Grid)({});