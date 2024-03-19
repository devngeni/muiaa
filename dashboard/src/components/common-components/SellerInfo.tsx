import React from 'react'
import { SellerHeaderContainer, SellerMainContainer } from '@/styles/SellerInfo-styles'
import { Box, Grid, styled } from '@mui/material';

function SellerInfo() {
    const ProductImageLogo = styled('img')({
        width: '50px',
        height: '50px',
        objectFit: 'cover',
    });
  return (
    <>
      <SellerMainContainer>
        <SellerHeaderContainer>Seller information</SellerHeaderContainer>
        <SellerHeaderContainer>
          <Grid container>
            <Grid item xs={3}>
              <ProductImageLogo
                src="https://source.unsplash.com/1000x1000/?product"
                alt="product"
              />
            </Grid>
            <Grid item xs={9} sx={{ display: "flex", alignItems: "center" }}>
              <h3>Wonder Feeds</h3>
            </Grid>
            <br />
            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", flexWrap:"wrap" }}>
              <Box sx={{ width: "50%", "*":{color:"#444444"} }}>
                <br />
                <h4>365</h4>
                <p>Products</p>
              </Box>
              <Box sx={{ width: "50%", "*":{color:"#444444"} }}>
                <br />
                <h4>365</h4>
                <p>Products</p>
              </Box>
              <Box sx={{ width: "50%", "*":{color:"#444444"} }}>
                <br />
                <h4>365</h4>
                <p>Products</p>
              </Box>
              <Box sx={{ width: "50%", "*":{color:"#444444"} }}>
                <br />
                <h4>365</h4>
                <p>Products</p>
              </Box>
            </Grid>
          </Grid>
        </SellerHeaderContainer>
      </SellerMainContainer>
    </>
  );
}

export default SellerInfo