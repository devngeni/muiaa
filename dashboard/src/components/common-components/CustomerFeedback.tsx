import React from "react";
import {
  SellerHeaderContainer,
  SellerMainContainer,
} from "@/styles/SellerInfo-styles";
import { Box, Grid, Typography, styled } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function CustomerFeedback() {
  const ProductImageLogo = styled("img")({
    width: "50px",
    height: "50px",
    objectFit: "cover",
  });
  return (
    <>
      <SellerMainContainer>
        <SellerHeaderContainer>Customer Feedback</SellerHeaderContainer>
        <SellerHeaderContainer>
            <Box>
                <StarIcon sx={{color:"#E8AD4B"}}/>
                <StarIcon sx={{color:"#E8AD4B"}}/>
                <StarIcon sx={{color:"#E8AD4B"}}/>
                <StarIcon sx={{color:"#E8AD4B"}}/>
                <StarIcon sx={{color:"#E8E8E8"}}/>
                <Typography>
                    I Like it
                </Typography>
                <Typography sx={{color:"#454545", fontSize:"12px"}}>
                    It is a good sunscreen and it leaves no whitecast but it makes the face very sweaty. Good product , fast delivery , amazing price
                </Typography>
                <Typography sx={{color:"#454545", fontStyle:"italic", fontWeight:"300"}}>
                    3rd Jul 2023 by Aneliko
                </Typography>
                <br/>
            </Box>
        </SellerHeaderContainer>
        <SellerHeaderContainer>
            <Box>
                <StarIcon sx={{color:"#E8AD4B"}}/>
                <StarIcon sx={{color:"#E8AD4B"}}/>
                <StarIcon sx={{color:"#E8AD4B"}}/>
                <StarIcon sx={{color:"#E8AD4B"}}/>
                <StarIcon sx={{color:"#E8E8E8"}}/>
                <Typography>
                    I Like it
                </Typography>
                <Typography sx={{color:"#454545", fontSize:"12px"}}>
                    It is a good sunscreen and it leaves no whitecast but it makes the face very sweaty. Good product , fast delivery , amazing price
                </Typography>
                <Typography sx={{color:"#454545", fontStyle:"italic", fontWeight:"300"}}>
                    3rd Jul 2023 by Aneliko
                </Typography>
                <br/>
            </Box>
        </SellerHeaderContainer>
      </SellerMainContainer>
    </>
  );
}

export default CustomerFeedback;
