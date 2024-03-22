import React from "react";
import DefaultLayout from "@/components/layouts/defaultLayout";
import {
  ProductDetailLayoutContainer,
  ProductDetailLayoutItem,
} from "@/styles/product-styles";
import {
  SellerHeaderContainer,
  SellerMainContainer,
} from "@/styles/SellerInfo-styles";
import { Box, Grid, Input, styled, LinearProgress } from "@mui/material";
import {
  OrangeButton,
} from "@/styles/bghero-styled";
import { TopBarContainer } from "@/styles/common-styles";
import { useRouter } from "next/router";

function Cart() {
  const CustomInput = styled(Input)({
    border: "1px solid gray",
    borderRadius: "10px",
    width: "100%",
    padding: "10px",
  });
  const ProductImage = styled("img")({
    width: "65px",
    height: "70px",
  });
  const router  = useRouter();
  const navigate  = () => {
    router.push("/paymentmethod")
  }

  return (
    <DefaultLayout>
      <TopBarContainer>
        <p>Back to shopping</p>
        <OrangeButton
          sx={{
            width: "450px",
            height: "55px",
            background: "#033D66",
            fontWeight: "600",
            maxWidth: "40vw",
          }}
          onClick={() => navigate()}
        >
          Checkout Ksh 270,456.23
        </OrangeButton>
      </TopBarContainer>
      <ProductDetailLayoutContainer container>
        <ProductDetailLayoutItem item md={8} sm={12}>
          <Box
            sx={{
              background: "#fff",
              boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
              padding: "20px",
              mt: "40px",
              borderRadius: "10px",
            }}
          >
            <SellerMainContainer sx={{ mt: "0" }}>
              <SellerHeaderContainer>
                Delivery information
              </SellerHeaderContainer>
            </SellerMainContainer>
            <SellerMainContainer sx={{ mt: "20px" }}>
              <Grid
                container
                sx={{ borderBottom: "1px solid gray", paddingBottom: "20px" }}
              >
                <Grid item xs={1.5}>
                  <ProductImage
                    src="https://source.unsplash.com/1000x1000/?product"
                    alt="product"
                  />
                </Grid>
                <Grid item xs={8}>
                  <p>
                    DairyBoost 5000, a premium feed blend, enriched with
                    essential nutrients, designed to maximize milk output while
                    ensuring robust cow health .
                  </p>
                  <br />
                  <p style={{ color: "#003565" }}>Wonder Feeds - 25 units</p>
                </Grid>
                <Grid item xs={2.5}>
                  <p style={{ color: "#003565", fontWeight: "700" }}>
                    Ksh 260,102.00
                  </p>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  borderBottom: "1px solid gray",
                  paddingBottom: "20px",
                  mt: "30px",
                }}
              >
                <Grid item xs={1.5}>
                  <ProductImage
                    src="https://source.unsplash.com/1000x1000/?product"
                    alt="product"
                  />
                </Grid>
                <Grid item xs={8}>
                  <p>
                    DairyBoost 5000, a premium feed blend, enriched with
                    essential nutrients, designed to maximize milk output while
                    ensuring robust cow health .
                  </p>
                  <br />
                  <p style={{ color: "#003565" }}>Wonder Feeds - 25 units</p>
                </Grid>
                <Grid item xs={2.5}>
                  <p style={{ color: "#003565", fontWeight: "700" }}>
                    Ksh 260,102.00
                  </p>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  borderBottom: "1px solid gray",
                  paddingBottom: "20px",
                  mt: "30px",
                }}
              >
                <Grid item xs={1.5}>
                  <ProductImage
                    src="https://source.unsplash.com/1000x1000/?product"
                    alt="product"
                  />
                </Grid>
                <Grid item xs={8}>
                  <p>
                    DairyBoost 5000, a premium feed blend, enriched with
                    essential nutrients, designed to maximize milk output while
                    ensuring robust cow health .
                  </p>
                  <br />
                  <p style={{ color: "#003565" }}>Wonder Feeds - 25 units</p>
                </Grid>
                <Grid item xs={2.5}>
                  <p style={{ color: "#003565", fontWeight: "700" }}>
                    Ksh 260,102.00
                  </p>
                </Grid>
              </Grid>
            </SellerMainContainer>
          </Box>
        </ProductDetailLayoutItem>
        <ProductDetailLayoutItem item md={4} sm={12}>
          <SellerMainContainer>
            <SellerHeaderContainer>Delivery information</SellerHeaderContainer>
            <SellerHeaderContainer>
              <Grid container>
                <br />
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  <Box sx={{ width: "100%", "*": { color: "#444444" } }}>
                    <br />
                    <CustomInput type="number" placeholder="Choose Country" />
                  </Box>
                  <Box sx={{ width: "100%", "*": { color: "#444444" } }}>
                    <br />
                    <CustomInput type="number" placeholder="Nearest Location" />
                  </Box>
                  <Box sx={{ width: "100%", "*": { color: "#444444" } }}>
                    <br />
                    <CustomInput type="number" placeholder="Pickup location" />
                  </Box>
                  <Box sx={{ width: "100%", "*": { color: "#444444" } }}>
                    <br />
                    <CustomInput
                      type="number"
                      placeholder="Additional description"
                    />
                  </Box>
                  <Box sx={{ width: "100%", "*": { color: "#444444" } }}>
                    <br />
                    <CustomInput type="date" placeholder="Choose Country" />
                  </Box>
                  <br />
                  <OrangeButton
                    sx={{
                      width: "450px",
                      height: "55px",
                      background: "#033D66",
                      fontWeight: "600",
                      maxWidth: "40vw",
                      mt:"50px"
                    }}
                    onClick={() => navigate()}
                  >
                    Checkout Ksh 270,456.23
                  </OrangeButton>
                </Grid>
              </Grid>
            </SellerHeaderContainer>
          </SellerMainContainer>
        </ProductDetailLayoutItem>
      </ProductDetailLayoutContainer>
    </DefaultLayout>
  );
}

export default Cart;
