import DefaultLayout from "@/components/layouts/defaultLayout";
import { OrangeButton } from "@/styles/bghero-styled";
import { MidCardContainer, TopBarContainer } from "@/styles/common-styles";
import { Payment } from "@mui/icons-material";
import { Input, Box, styled, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import {useRouter} from "next/router";  // Added import

function Paymentmethod() {
    const PaymentImg = styled("img")({
        width:"auto",
        height:"35px",
    });
      const [age, setAge] = React.useState("");
      const router = useRouter();  // Corrected typo

      const handleChange = (event: any) => {
        setAge(event.target.value as string);
      };
      const navigate = () => {
        router.push("/success")
      }


  return (
    <>
      <DefaultLayout>
        <TopBarContainer>
          <p>Back to shopping</p>
          <p>Order ID: CR89899-23</p>
        </TopBarContainer>
        <MidCardContainer>
          <p>Payment Network</p>
          <br />
          <Input
            type="text"
            placeholder="Enter payment network"
            value={"Ksh. 270,456.23"}
            sx={{
              width: "100%",
              background: "#F6F6F6",
              padding: "10px",
              borderRadius: "10px",
              fontWeight: "800",
              color: "#636164",
              fontSize: "24px",
              borderBottom: "none",
              marginBottom: "20px",
              "*": {
                // Corrected selector
                borderBottom: "none",
              },
            }}
          />
          <br />
          <p>Choose Payment Method</p>
          <br />
          <Box
            sx={{
              background: "#FAFAFA",
              borderRadius: "10px",
              pt: "20px",
            }}
          >
            <Box
              sx={{
                minHeight: "50px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottom: "1px solid #C5C5C5",
                width: "95%",
                margin: "auto",
                pt: "20px",
              }}
            >
              <Box>
                <Input type="radio" name="payment" value="mpesa" /> &nbsp;
                Mobile Money
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <PaymentImg src="/assets/mpesa.svg" alt="mpesa" />
                &nbsp; &nbsp;
                <PaymentImg src="/assets/airtel.svg" alt="airtel" />
              </Box>
            </Box>
            <br />
            <FormControl
              fullWidth
              sx={{ marginBottom: "20px", width: "95%", marginLeft: "2.5%" }}
            >
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <Input
              type="text"
              placeholder="phone number"
              sx={{ width: "95%", marginLeft: "2.5%" }}
            />
          </Box>
          <br />
          <Box
            sx={{
              background: "#FAFAFA",
              borderRadius: "10px",
              pt: "20px",
            }}
          >
            <Box
              sx={{
                minHeight: "50px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottom: "1px solid #C5C5C5",
                width: "95%",
                margin: "auto",
                pt: "20px",
              }}
            >
              <Box>
                <Input type="radio" name="payment" value="mpesa" /> &nbsp; Bank
                Card
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <PaymentImg src="/assets/mastercard.svg" alt="mpesa" />
                &nbsp; &nbsp;
                <PaymentImg src="/assets/visa.svg" alt="airtel" />
              </Box>
            </Box>
            <br />
            <br />
            <Input
              type="text"
              placeholder="Card Number"
              sx={{ width: "95%", marginLeft: "2.5%" }}
            />
            <br />
            <br />
            <Input
              type="text"
              placeholder="Card Number"
              sx={{ width: "95%", marginLeft: "2.5%" }}
            />
          </Box>
          <br />
          <OrangeButton
            sx={{
              width: "100%",
              height: "55px",
              background: "#033D66",
              fontWeight: "600",
            }}
            onClick={() => navigate()}
          >
            Checkout Ksh 270,456.23
          </OrangeButton>
        </MidCardContainer>
      </DefaultLayout>
    </>
  );
}

export default Paymentmethod;
