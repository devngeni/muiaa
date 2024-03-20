import DefaultLayout from "@/components/layouts/defaultLayout";
import { OrangeButton } from "@/styles/bghero-styled";
import { MidCardContainer, TopBarContainer } from "@/styles/common-styles";
import { Payment } from "@mui/icons-material";
import {
  Input,
  Box,
  styled,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
} from "@mui/material";
import React from "react";

function Invoice() {
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
        <MidCardContainer sx={{ padding: "0", overflow: "hidden" }}>
          <Box
            sx={{
              width: "100%",
              height: "60px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 40px",
              backgroundColor: "#14263E",
            }}
          >
            <PaymentImg src="assets/logo.png" />
            <p style={{ color: "#fff" }}>Invoice: CR89899-23</p>
          </Box>
          <br />
          <br />
          <Grid container sx={{ width: "90%", margin: "auto" }}>
            <Grid item xs={12}>
              <p style={{ color: "#E8AD4B" }}>Order Id</p>
              <p style={{ color: "#14263E" }}>CR89899-23</p>
              <br />
            </Grid>
            <Grid item xs={12}>
              <p style={{ color: "#E8AD4B" }}>Payment Date</p>
              <p style={{ color: "#14263E" }}>27 Jan, 2024</p>
              <br />
            </Grid>
            <Grid item xs={6}>
              <p style={{ color: "#E8AD4B" }}>Payment Date</p>
              <p style={{ color: "#14263E" }}>
                John Adelide
                <br /> 12 Tanga City, Tanzania
                <br /> Tetu Street, Mbuga House
              </p>
              <br />
            </Grid>
            <Grid item xs={6}>
              <p style={{ color: "#E8AD4B" }}>Bill to</p>
              <p style={{ color: "#14263E" }}>John Adelide</p>
              <br />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "60px",
                borderBottom: "1px solid #E3E3E3",
                color: "#14263E",
                fontWeight: "700",
              }}
            >
              Item
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "60px",
                borderBottom: "1px solid #E3E3E3",
                color: "#14263E",
                fontWeight: "700",
              }}
            >
              Units
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "60px",
                borderBottom: "1px solid #E3E3E3",
                color: "#14263E",
                fontWeight: "700",
              }}
            >
              Cost
            </Grid>

            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "60px",
                color: "#1E1E1E",
              }}
            >
              Dairy Boost 5000 Premium Blend
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "60px",
                color: "#1E1E1E",
              }}
            >
              25
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "60px",
                color: "#1E1E1E",
              }}
            >
              260,102.00
            </Grid>

            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "60px",
                color: "#1E1E1E",
              }}
            >
              Logistics costs
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "60px",
                color: "#1E1E1E",
              }}
            >
              {" "}
              -{" "}
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "60px",
                color: "#1E1E1E",
              }}
            >
              17,657.00
            </Grid>

            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "60px",
                color: "#1E1E1E",
                borderBottom: "1px solid #E3E3E3",
              }}
            >
              Tax
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "60px",
                color: "#1E1E1E",
                borderBottom: "1px solid #E3E3E3",
              }}
            >
              {" "}
              -{" "}
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "60px",
                color: "#1E1E1E",
                borderBottom: "1px solid #E3E3E3",
              }}
            >
              17,657.00
            </Grid>

            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "60px",
                color: "#14263E",
                fontWeight: "700",
              }}
            >
              Total
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "60px",
                color: "#14263E",
                fontWeight: "700",
              }}
            >
              {" "}
              -{" "}
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "60px",
                color: "#14263E",
                fontWeight: "700",
              }}
            >
              260,102.00
            </Grid>

            <Grid item xs={12}>
              <br />
              <p style={{ color: "#14263E", fontWeight: "500" }}>
                Terms And Conditions
              </p>
              <p
                style={{
                  color: "#14263E",
                  fontSize: "14px",
                  fontWeight: "200",
                }}
              >
                Goods once sold can never be returned. MUIAA Shall not be held
                liable for any negligence or impedance caused by the person
                ivolved
              </p>
              <br />
              <p
                style={{
                  color: "#14263E",
                  fontSize: "14px",
                  fontWeight: "200",
                }}
              >
                www.muiaa.com
              </p>
              <br />
            </Grid>
          </Grid>
        </MidCardContainer>
      </DefaultLayout>
    </>
  );
}

export default Invoice;
