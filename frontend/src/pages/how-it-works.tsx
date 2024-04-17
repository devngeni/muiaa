import Head from "next/head";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import {
  OrangeButton,
  UnparalleledMainText,
  UnparalleledSubText,
  WhiteText,
  SeamlessMainText,
  BlueButton,
} from "@/StyledComponents/HomeHero";
import {
  AccordionText,
  BgOverlay,
  BlueSection,
  Part,
  PlatformContainer,
  PLatformItem,
  WhiteBackgroundAccordion,
  WhiteBackgroundAccordionDetails,
  WhiteBackgroundAccordionSummary,
  WhiteBox,
  WorksMainHero,
  AccordionText2,
} from "@/StyledComponents/Works";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import MaximizeIcon from "@mui/icons-material/Maximize";
import { NavButton2 } from "@/StyledComponents/Navbar";
import ProductsCarousel from "@/Components/ProductsCarousel";
import TestimonialCarousel from "@/Components/TestimonialCarousel";
import { Fade } from "react-awesome-reveal";

function HotItWorks() {
  return (
    <>
      <Head>
        <title>MUIAA</title>
        <meta
          name="description"
          content="HOW-IT-WORKS | MUIRURI & ASSOCIATES LTD"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logomini.png" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Navbar />
      <Box>
        <WorksMainHero>
          <BgOverlay>
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Fade direction="down">
                <Typography
                  sx={{
                    color: "#ffff",
                    fontWeight: "500",
                    fontSize: { md: "60px", xs: "40px" },
                    minHeight: { md: "200px", xs: "200px" },
                    maxWidth: "1000px",
                    margin: "auto",
                    mt: "100px",
                    lineHeight: "",
                    letterSpacing: "-3px",
                    fontFamily: "'Inter'",
                  }}
                >
                  Reliable supply for all your dairy products, across the border
                </Typography>
              </Fade>
              <Fade direction="up">
                <OrangeButton
                  sx={{ marginTop: "20px", maxWidth: "300px", mb: "100px" }}
                >
                  Place Order
                </OrangeButton>
              </Fade>
            </Box>
          </BgOverlay>
        </WorksMainHero>
        <PlatformContainer container>
          <PLatformItem item xs={12} md={6}>
            <Typography
              sx={{
                color: "#ffff",
                fontWeight: "600",
                fontSize: { md: "48px", xs: "36px" },
                width: { md: "65%", xs: "90%" },
                margin: "auto",
                mt: "100px",
                lineHeight: "72px",
                letterSpacing: "-3px",
                fontFamily: "'Inter'",
                maxWidth:"400px"
              }}
            >
              How our platform Works{" "}
            </Typography>
            <br />
            <br />
            <WhiteBox sx={{ display: { md: "block", xs: "none" } }} />
          </PLatformItem>
          <PLatformItem
            item
            xs={12}
            md={6}
            sx={{
              width: "90%",
              maxWidth: "90vw",
              margin: "auto",
              maxHeight: { md: "600px", xs: "auto" },
              overflowY: "scroll",
            }}
          >
            <Grid container sx={{ marginTop: { md: "150px", xs: "20px" } }}>
              <Grid item md={3} sx={{ textAlign: "center" }}>
                <Fade direction="down">
                  <img
                    src="./assets/SearchOrange.svg"
                    style={{ width: "100px" }}
                  />
                  <br />
                  <br />

                  <img src="./assets/line.svg" style={{ height: "100px" }} />
                </Fade>
              </Grid>
              <Grid item md={9}>
                <Fade direction="down">
                  <UnparalleledMainText sx={{ color: "#fff" }}>
                    Place order
                  </UnparalleledMainText>
                  <br />
                  <UnparalleledSubText
                    sx={{ maxWidth: "500px", color: "#E0D2A4" }}
                  >
                    Place an order via Whatsapp or our Webstore.
                    <br />
                    <br /> Supplier details, contracts, and quality assurance
                    information in a transparent and tamper-proof manner are
                    recorded in the blockchain. <br />
                    <br /> Contracts with suppliers would typically outline
                    terms such as feed quality, pricing, delivery schedules, and
                    payment terms.
                  </UnparalleledSubText>
                </Fade>
              </Grid>
            </Grid>
            <Grid container sx={{ marginTop: "60px" }}>
              <Grid item md={3} sx={{ textAlign: "center" }}>
                <Fade direction="down">
                  <img
                    src="./assets/OrangeContract.svg"
                    style={{ width: "80px" }}
                  />
                  <br />
                  <br />
                  <img src="./assets/line.svg" style={{ height: "100px" }} />
                </Fade>
              </Grid>
              <Grid item md={9}>
                <Fade direction="down">
                  <UnparalleledMainText sx={{ color: "#fff" }}>
                    Order processing
                  </UnparalleledMainText>
                  <br />
                  <UnparalleledSubText
                    sx={{ maxWidth: "500px", color: "#E0D2A4" }}
                  >
                    We implement Smart logistics contracts on the XDC blockchain
                    to facilitate seamless transportation arrangements and
                    optimize routes, reducing transportation costs.
                  </UnparalleledSubText>
                  <br />
                  <br />
                  <br />
                  <br />
                </Fade>
              </Grid>
            </Grid>
            <Grid container sx={{ marginTop: "60px" }}>
              <Grid item md={3} sx={{ textAlign: "center" }}>
                <Fade direction="down">
                  <img
                    src="./assets/traceability.svg"
                    style={{ width: "70px" }}
                  />
                  <br />
                  <br />

                  <img src="./assets/line.svg" style={{ height: "100px" }} />
                </Fade>
              </Grid>
              <Grid item md={9}>
                <Fade direction="down">
                  <UnparalleledMainText sx={{ color: "#fff" }}>
                    Tokenization and traceability
                  </UnparalleledMainText>
                  <br />
                  <UnparalleledSubText
                    sx={{ maxWidth: "500px", color: "#E0D2A4" }}
                  >
                    We reecord transportation details on the blockchain,
                    including shipment status, location, and estimated time of
                    arrival.
                  </UnparalleledSubText>
                </Fade>
              </Grid>
            </Grid>
            <Grid container sx={{ marginTop: "60px" }}>
              <Grid item md={3} sx={{ textAlign: "center" }}>
                <Fade direction="down">
                  <img
                    src="./assets/SearchOrange.svg"
                    style={{ width: "100px" }}
                  />
                  <br />
                  <br />
                  <img src="./assets/line.svg" style={{ height: "100px" }} />
                </Fade>
              </Grid>
              <Grid item md={9}>
                <Fade direction="down">
                  <UnparalleledMainText sx={{ color: "#fff" }}>
                    Delivery
                  </UnparalleledMainText>
                  <br />
                  <UnparalleledSubText
                    sx={{ maxWidth: "500px", color: "#E0D2A4" }}
                  >
                    We enable cross-border payments using XDC tokens, This
                    eliminates currency exchange fees and delays.
                  </UnparalleledSubText>
                  <br />
                  <br />
                  <br />
                  <br />
                </Fade>
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
                height: { md: "600px", xs: "auto" },
                boxShadow: "rgba(0, 0, 0, 0.3) 0px 26px 26px",
                borderTop: "1px solid #fff",
                marginTop: "-10px",
              }}
            >
              <Box sx={{ mt: { md: "-200px", xs: "10px" }, width: "100%" }}>
                <Fade direction="down">
                  <img src="./assets/StockK.png" style={{ width: "100%" }} />
                </Fade>
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
                fontWeight: "600",
                fontSize: { md: "48px", xs: "30px" },
                width: "80%",
                margin: "auto",
                mt: { md: "100px", xs: "20px" },
                lineHeight: "55px",
                letterSpacing: "-2px",
                fontFamily: "'Inter'",
              }}
            >
              We believe that in a world that{" "}
              <span style={{ color: "#DFBC6D" }}>
                {" "}
                turns you into a business
              </span>{" "}
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontWeight: "300",
                fontSize: { md: "28px", xs: "25px" },
                width: "80%",
                margin: "auto",
                mt: { md: "10px", xs: "5px" },
                lineHeight: "44px",
                fontFamily: "'Inter'",
              }}
            >
              we are able to use technology to deliver to you an unparalleled
              dairy feeds supply.
            </Typography>
          </PLatformItem>
        </PlatformContainer>
        <ProductsCarousel />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Part>
          <Box>
            <Typography
              sx={{
                color: "#ffff",
                fontWeight: "700",
                fontSize: { md: "35px", xs: "27px" },
                margin: "auto",
                lineHeight: "42px",
                letterSpacing: "-2px",
                fontFamily: "'Inter'",
              }}
            >
              They were Part, they say...
            </Typography>
          </Box>
        </Part>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <TestimonialCarousel />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <BlueSection>
          <WhiteText
            sx={{
              ml: "0",
              mb: "50px",
              mt: "70px",
              maxWidth: "80vw",
              fontSize: { md: "45px", xs: "35px" },
            }}
          >
            Technical FAQ's
          </WhiteText>
          <WhiteBackgroundAccordion>
            <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
              <AccordionText sx={{ fontSize: { md: "25px", xs: "20px" } }}>
                How do I place an order on MUIAA Feeds
              </AccordionText>
            </WhiteBackgroundAccordionSummary>
            <WhiteBackgroundAccordionDetails>
              <AccordionText2>
                You can place an order through either Whatsapp or our Webstore.
                Simply reach out to us through the provided channels, and our
                team will guide you through the process.
              </AccordionText2>
            </WhiteBackgroundAccordionDetails>
          </WhiteBackgroundAccordion>
          <WhiteBackgroundAccordion>
            <WhiteBackgroundAccordionSummary
              sx={{ fontSize: { md: "25px", xs: "20px" } }}
              expandIcon={<MaximizeIcon />}
            >
              <AccordionText sx={{ fontSize: { md: "25px", xs: "20px" } }}>
                How does blockchain technology benefit MUIAA Feeds?
              </AccordionText>
            </WhiteBackgroundAccordionSummary>
            <WhiteBackgroundAccordionDetails>
              <AccordionText2>
                Blockchain technology ensures transparency and security by
                recording supplier details, contracts, and quality assurance
                information in a tamper-proof manner.
              </AccordionText2>
            </WhiteBackgroundAccordionDetails>
          </WhiteBackgroundAccordion>
          <WhiteBackgroundAccordion>
            <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
              <AccordionText sx={{ fontSize: { md: "25px", xs: "20px" } }}>
                What information is typically included in supplier contracts?
              </AccordionText>
            </WhiteBackgroundAccordionSummary>
            <WhiteBackgroundAccordionDetails>
              <AccordionText2>
                Supplier contracts usually include details such as feed quality
                standards, pricing agreements, delivery schedules, and payment
                terms.
              </AccordionText2>
            </WhiteBackgroundAccordionDetails>
          </WhiteBackgroundAccordion>
          <WhiteBackgroundAccordion>
            <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
              <AccordionText sx={{ fontSize: { md: "25px", xs: "20px" } }}>
                How does MUIAA Feeds optimize transportation processes?
              </AccordionText>
            </WhiteBackgroundAccordionSummary>
            <WhiteBackgroundAccordionDetails>
              <AccordionText2>
                We utilize Smart logistics contracts on the XDC blockchain to
                streamline transportation arrangements and optimize routes. This
                helps in reducing transportation costs and ensures efficient
                delivery of orders.
              </AccordionText2>
            </WhiteBackgroundAccordionDetails>
          </WhiteBackgroundAccordion>
          <WhiteBackgroundAccordion>
            <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
              <AccordionText sx={{ fontSize: { md: "25px", xs: "20px" } }}>
                How does tokenization contribute to traceability?
              </AccordionText>
            </WhiteBackgroundAccordionSummary>
            <WhiteBackgroundAccordionDetails>
              <AccordionText2>
                Tokenization allows us to record transportation details on the
                blockchain, including shipment status, location, and estimated
                time of arrival.
              </AccordionText2>
            </WhiteBackgroundAccordionDetails>
          </WhiteBackgroundAccordion>
          <WhiteBackgroundAccordion>
            <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
              <AccordionText sx={{ fontSize: { md: "25px", xs: "20px" } }}>
                What are the advantages of using XDC tokens for cross-border
                payments?
              </AccordionText>
            </WhiteBackgroundAccordionSummary>
            <WhiteBackgroundAccordionDetails>
              <AccordionText2>
                Using XDC tokens for cross-border payments eliminates currency
                exchange fees and delays, making transactions faster and more
                cost-effective for both parties involved.
              </AccordionText2>
            </WhiteBackgroundAccordionDetails>
          </WhiteBackgroundAccordion>
          <WhiteBackgroundAccordion>
            <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
              <AccordionText sx={{ fontSize: { md: "25px", xs: "20px" } }}>
                Is MUIAA Feeds available for international orders?
              </AccordionText>
            </WhiteBackgroundAccordionSummary>
            <WhiteBackgroundAccordionDetails>
              <AccordionText2>
                Yes, MUIAA Feeds facilitates cross-border transactions, allowing
                customers from different regions to place orders seamlessly.
              </AccordionText2>
            </WhiteBackgroundAccordionDetails>
          </WhiteBackgroundAccordion>
          <br />
          <br />
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <SeamlessMainText
              sx={{
                color: "#fff",
                fontWeight: "900",
                fontSize: { md: "80px", sm: "40px" },
                letterSpacing: "-3px",
                textAlign: "center",
                width: "100%",
                maxWidth: "700px",
                margin: "auto",
              }}
            >
              Get Started
            </SeamlessMainText>
            <UnparalleledSubText
              sx={{
                fontSize: "28px",
                lineHeight: { md: "44px", sm: "30px" },
                color: "#fff",
                textAlign: "center",
                width: "100%",
                maxWidth: "1200px",
                margin: "auto",
                fontWeight: "300",
              }}
            >
              Hundreds of people already going cross-border with us. What are
              you waiting for?
            </UnparalleledSubText>
            <br />
            <NavButton2 sx={{ maxWidth: "262px" }}>Get Satrted</NavButton2>
            <br />
            <br />
            <br />
            <br />
          </Box>
        </BlueSection>
        <Footer />
      </Box>
    </>
  );
}

export default HotItWorks;
