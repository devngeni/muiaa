import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { OrangeButton, UnparalleledMainText, UnparalleledSubText } from '@/StyledComponents/HomeHero';
import {
  BgOverlay,
  Part,
  PlatformContainer,
  PLatformItem,
  WhiteBox,
  WorksMainHero,
} from "@/StyledComponents/Works";
import { Box, Grid, Typography } from '@mui/material';
import React from 'react'

function HotItWorks() {
  return (
    <>
      <Navbar />
      <WorksMainHero>
        <BgOverlay>
          <Box sx={{ textAlign: "center", width: "100%" }}>
            <Typography
              sx={{
                color: "#ffff",
                fontWeight: "900",
                fontSize: "60px",
                maxWidth: "1200px",
                margin: "auto",
                mt: "100px",
                lineHeight: "",
                letterSpacing: "-3px",
              }}
            >
              Reliable supply for all your dairy products, across the border
            </Typography>
            <OrangeButton
              sx={{ marginTop: "20px", maxWidth: "300px", mb: "100px" }}
            >
              Place Order
            </OrangeButton>
          </Box>
        </BgOverlay>
      </WorksMainHero>
      <PlatformContainer container>
        <PLatformItem item xs={12} md={6}>
          <Typography
            sx={{
              color: "#ffff",
              fontWeight: "900",
              fontSize: "60px",
              width: "65%",
              margin: "auto",
              mt: "100px",
              lineHeight: "72px",
              letterSpacing: "-3px",
            }}
          >
            How our platform Works{" "}
          </Typography>
          <br />
          <br />
          <WhiteBox />
        </PLatformItem>
        <PLatformItem item xs={12} md={6}>
          <Grid container sx={{ marginTop: "150px" }}>
            <Grid item md={3} sx={{ textAlign: "center" }}>
              <img src="./assets/SearchOrange.svg" style={{ width: "100px" }} />
              <br />
              <br />

              <img src="./assets/line.svg" style={{ height: "100px" }} />
            </Grid>
            <Grid item md={9}>
              <UnparalleledMainText sx={{ color: "#fff" }}>
                Place order
              </UnparalleledMainText>
              <br />
              <UnparalleledSubText sx={{ maxWidth: "500px", color: "#E0D2A4" }}>
                Place an order via Whatsapp or our Webstore.
                <br />
                <br /> Supplier details, contracts, and quality assurance
                information in a transparent and tamper-proof manner are
                recorded in the blockchain. <br />
                <br /> Contracts with suppliers would typically outline terms
                such as feed quality, pricing, delivery schedules, and payment
                terms.
              </UnparalleledSubText>
            </Grid>
          </Grid>
          <Grid container sx={{ marginTop: "60px" }}>
            <Grid item md={3} sx={{ textAlign: "center" }}>
              <img
                src="./assets/OrangeContract.svg"
                style={{ width: "100px" }}
              />
              <br />
              <br />

              <img src="./assets/line.svg" style={{ height: "100px" }} />
            </Grid>
            <Grid item md={9}>
              <UnparalleledMainText sx={{ color: "#fff" }}>
                Order processing
              </UnparalleledMainText>
              <br />
              <UnparalleledSubText sx={{ maxWidth: "500px", color: "#E0D2A4" }}>
                We implement Smart logistics contracts on the XDC blockchain to
                facilitate seamless transportation arrangements and optimize
                routes, reducing transportation costs.
              </UnparalleledSubText>
            </Grid>
          </Grid>
        </PLatformItem>
        <PLatformItem
          item
          xs={12}
          md={6}
          sx={{ background: "#fff", pb: "100px" }}
        >
          <WhiteBox
            sx={{
              borderTopRightRadius: "0",
              height: "600px",
              boxShadow: "rgba(0, 0, 0, 0.3) 0px 26px 26px",
              borderTop: "1px solid #fff",
            }}
          >
            <Box sx={{ mt: "-200px", width: "100%" }}>
              <img src="./assets/Stock.png" style={{ width: "100%" }} />
            </Box>
          </WhiteBox>
        </PLatformItem>
        <PLatformItem
          item
          xs={12}
          md={6}
          sx={{ background: "#fff", pb: "100px" }}
        >
          <Typography
            sx={{
              color: "#000",
              fontWeight: "900",
              fontSize: "60px",
              width: "80%",
              margin: "auto",
              mt: "100px",
              lineHeight: "65px",
              letterSpacing: "-3px",
            }}
          >
            We believe that in a world that{" "}
            <span style={{ color: "#DFBC6D" }}>
              {" "}
              turns you into a business, we are able to use technology
            </span>{" "}
            to deliver to you an unparalleled dairy feeds supply.
          </Typography>
        </PLatformItem>
      </PlatformContainer>
      <Part>
        <Box>
        <Typography
          sx={{
            color: "#ffff",
            fontWeight: "900",
            fontSize: "60px",
            margin: "auto",
            lineHeight: "",
            letterSpacing: "-3px",
          }}
        >
          They were Part, they say...
        </Typography>
        </Box>
      </Part>
      <Footer />
    </>
  );
}

export default HotItWorks;