import DefaultLayout from "@/components/layouts/defaultLayout";
import { TopBarContainer, MidCardContainer } from "@/styles/common-styles";
import { Box, Grid, styled } from "@mui/material";
import React from "react";

function success() {
  const PaymentImg = styled("img")({
    width: "auto",
    height: "35px",
  });
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <DefaultLayout>
        <TopBarContainer>
          <p>Back to shopping</p>
          <p>Order ID: CR89899-23</p>
        </TopBarContainer>
        <Box sx={{maxWidth:"1300px", margin:"auto"}}>
          <MidCardContainer
            sx={{ padding: "0", overflow: "hidden", margin: "0" }}
          >
            <Box
              sx={{
                width: "100%",
                height: "60px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 40px",
                backgroundColor: "#fff",
              }}
            >
              <p>Order Placed</p>
              <p style={{ color: "#fff" }}>Invoice: CR89899-23</p>
            </Box>
          </MidCardContainer>
        </Box>
      </DefaultLayout>
    </>
  );
}

export default success;
