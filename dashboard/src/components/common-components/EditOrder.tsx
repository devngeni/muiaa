import React from "react";
import {
  SellerHeaderContainer,
  SellerMainContainer,
} from "@/styles/SellerInfo-styles";
import { Box, Grid, Input, styled, LinearProgress } from "@mui/material";
import {
  ButtonContainer,
  OrangeButton,
  GrayButton,
} from "@/styles/bghero-styled";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {useRouter} from 'next/router';

function EditOrder() {
  const ProductImageLogo = styled("img")({
    width: "50px",
    height: "50px",
    objectFit: "cover",
  });
  const CustomInput = styled(Input)({
    border:"1px solid gray",
    borderRadius:"10px"
  })
  const router = useRouter()
  const navigate = () => {
    router.push("/cart")
  }
  return (
    <>
      <SellerMainContainer>
        <SellerHeaderContainer>Seller information</SellerHeaderContainer>
        <SellerHeaderContainer>
          <Grid container>
            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
              <h3>Quantity Variation</h3>
            </Grid>
            <br />
            <Grid
              item
              xs={12}
              sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
            >
              <Box sx={{ width: "50%", "*": { color: "#444444" } }}>
                <br />
                <p>10 Kg bag - Ksh. 1,102.25</p>
              </Box>
              <Box sx={{ width: "50%", "*": { color: "#444444" } }}>
                <br />
                <CustomInput type="number" />
              </Box>
              <Box sx={{ width: "50%", "*": { color: "#444444" } }}>
                <br />
                <p>10 Kg bag - Ksh. 1,102.25</p>
              </Box>
              <Box sx={{ width: "50%", "*": { color: "#444444" } }}>
                <br />
                <CustomInput type="number" />
              </Box>
              <Box sx={{ width: "50%", "*": { color: "#444444" } }}>
                <br />
                <p>10 Kg bag - Ksh. 1,102.25</p>
              </Box>
              <Box sx={{ width: "50%", "*": { color: "#444444" } }}>
                <br />
                <CustomInput type="number" />
              </Box>
              <Box sx={{ width: "50%", "*": { color: "#444444" } }}>
                <br />
                <p>10 Kg bag - Ksh. 1,102.25</p>
              </Box>
              <Box sx={{ width: "50%", "*": { color: "#444444" } }}>
                <br />
                <CustomInput type="number" />
              </Box>
              <Box sx={{ width: "50%", "*": { color: "#444444" } }}>
                <br />
                <p>Min order: 250kg</p>
              </Box>
              <Box sx={{ width: "50%", "*": { color: "#444444" } }}>
                <br />
                <p>Cumulative: 745kg</p>
              </Box>
              <Box sx={{ width: "100%", "*": { color: "#444444" } }}>
                <br />
                <LinearProgress
                  variant="determinate"
                  value={50}
                  sx={{
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#E8AD4B", // Change the color of the progress bar
                    },
                  }}
                />
                <hr />
              </Box>
              <Box sx={{ width: "50%", "*": { color: "#444444" } }}>
                <br />
                <p>SubTotal</p>
              </Box>
              <Box sx={{ width: "50%", "*": { color: "#444444" } }}>
                <br />
                <p>Ksh 260,102.00</p>
              </Box>
              <br />
              <Box sx={{ width: "100%" }}>
                <br />
                <ButtonContainer sx={{ padding: "0" }}>
                  {/*  render orange button if product is true  else render graybutton */}
                  <OrangeButton
                    sx={{ width: "80%", background: "#033D66" }} // Orange button style
                    variant="contained"
                    onClick={() => navigate()}
                  >
                    Proceed to Checkout
                  </OrangeButton>
                  <GrayButton sx={{background:"transparent", border:"1px solid red"}}>
                    <DeleteForeverIcon sx={{ color: "red" }} />
                  </GrayButton>
                </ButtonContainer>
              </Box>
            </Grid>
          </Grid>
        </SellerHeaderContainer>
      </SellerMainContainer>
    </>
  );
}

export default EditOrder;
