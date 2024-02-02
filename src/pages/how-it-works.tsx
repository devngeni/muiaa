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
import {TypeAnimation} from "react-type-animation";

function HotItWorks() {
  return (
    <>
      <Navbar />
      <WorksMainHero>
        <BgOverlay>
          <Box sx={{ textAlign: "center", width: "100%" }}>
            <Fade direction="down">
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
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Reliable supply for all your dairy products,",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    " across the border",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
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
                  <br /> Contracts with suppliers would typically outline terms
                  such as feed quality, pricing, delivery schedules, and payment
                  terms.
                </UnparalleledSubText>
              </Fade>
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
              <Fade direction="down">
                <img src="./assets/Stock.png" style={{ width: "100%" }} />
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
          }}
        >
          Technical FAQ's
        </WhiteText>
        <WhiteBackgroundAccordion>
          <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
            <AccordionText>How does it help Farmers</AccordionText>
          </WhiteBackgroundAccordionSummary>
          <WhiteBackgroundAccordionDetails>
            <AccordionText2>
              It helps farmers show that they produce top-quality dairy and
              helps them reach more people who care about where their food comes
              from.
            </AccordionText2>
          </WhiteBackgroundAccordionDetails>
        </WhiteBackgroundAccordion>
        <WhiteBackgroundAccordion>
          <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
            <AccordionText>Is it easy to use?</AccordionText>
          </WhiteBackgroundAccordionSummary>
          <WhiteBackgroundAccordionDetails>
            <AccordionText2>
              Yes, it's easy! You can scan a code or use an app to find out
              everything you need to know about the dairy products you're
              getting. It's like a digital tag that ensures you're getting the
              best.
            </AccordionText2>
          </WhiteBackgroundAccordionDetails>
        </WhiteBackgroundAccordion>
        <WhiteBackgroundAccordion>
          <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
            <AccordionText>Is my information safe?</AccordionText>
          </WhiteBackgroundAccordionSummary>
          <WhiteBackgroundAccordionDetails>
            <AccordionText2>
              Absolutely! Your personal details are kept super safe and can't be
              seen by anyone else. This means you can use the platform without
              worrying about your privacy.
            </AccordionText2>
          </WhiteBackgroundAccordionDetails>
        </WhiteBackgroundAccordion>
        <WhiteBackgroundAccordion>
          <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
            <AccordionText>How does it help farmers?</AccordionText>
          </WhiteBackgroundAccordionSummary>
          <WhiteBackgroundAccordionDetails>
            <AccordionText2>
              It helps farmers show that they produce top-quality dairy and
              helps them reach more people who care about where their food comes
              from
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
              fontSize: "80px",
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
              lineHeight: "44px",
              color: "#fff",
              textAlign: "center",
              width: "100%",
              maxWidth: "1200px",
              margin: "auto",
              fontWeight: "300",
            }}
          >
            Hundreds of people already going cross-border with us. What are you
            waiting for?
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
    </>
  );
}

export default HotItWorks;
