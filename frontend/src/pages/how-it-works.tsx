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
  OrangeText,
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
  StepContainer,
  StepBox,
  StepTitle,
  StepText,
  ImageContainer,
  Subtitle,
  PartMask,
  HeroWorkMainContainer,
  WorkBgMask,
} from "@/StyledComponents/Works";
import { Box, Grid, Icon, Typography } from "@mui/material";
import React from "react";
import MaximizeIcon from "@mui/icons-material/Maximize";
import { NavButton2 } from "@/StyledComponents/Navbar";
import ProductsCarousel from "@/Components/ProductsCarousel";
import TestimonialCarousel from "@/Components/TestimonialCarousel";
import { Fade } from "react-awesome-reveal";
import { steps } from "@/data/platformSteps";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import Image from "next/image";
import OrderPlace from "../../public/assets/orderPlace";
import OrderCoordination from "../../public/assets/orderCoordination";
import Testing from "../../public/assets/Testing";
import CarrierArrangement from "../../public/assets/carrierArrangement";
import CreditCard from "../../public/assets/creditCard";
import Notes from "../../public/assets/notes";
import Location from "../../public/assets/location";
import Checked from "../../public/assets/checked";

const icons = [
  <OrderPlace />,
  <OrderCoordination />,
  <Testing />,
  <CarrierArrangement />,
  <CreditCard />,
  <Notes />,
  <OrderPlace />,
  <Location />,
  <Checked />,
  <CreditCard />,
];
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
        <HeroWorkMainContainer>
          <WorkBgMask>
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Fade direction="down">
                <Typography
                  sx={{
                    color: "#ffff",
                    fontWeight: "500",
                    minHeight: { md: "200px", xs: "200px" },
                    maxWidth: "1000px",
                    margin: "auto",
                    mt: "100px",
                    fontFamily: "'Inter'",
                    letterSpacing: { md: "-2px", xs: "-1px" },
                    fontSize: { xs: "28px", md: "60px" },
                    lineHeight: { xs: "38px", md: "60px" },
                    width: { xs: "90%", sm: "70%", md: "70%" },
                  }}
                >
                  Reliable supply for all your dairy products, across the border
                </Typography>
              </Fade>
              <Fade direction="up">
                <OrangeButton
                  sx={{
                    marginTop: "20px",
                    maxWidth: "300px",
                    mb: "100px",
                    background: "#DFBC6D",
                    color: "#ffff",
                  }}
                >
                  Place Order
                </OrangeButton>
              </Fade>
            </Box>
          </WorkBgMask>
        </HeroWorkMainContainer>
        <Fade direction="down" triggerOnce>
          <PlatformContainer container>
            <Subtitle
              sx={{
                width: { md: "60%", xs: "100%" },
                fontSize: { xs: "28px", md: "40px", xl: "48px" },
                letterSpacing: { md: "-3px", xs: "-1px" },
                textAlign: "center",
                margin: "auto",
                pt: { xs: "20px", md: "50px" },
                lineHeight: { xs: "35px", md: "60px" },
                fontWeight: "500",
              }}
            >
              How our platform works
            </Subtitle>
            <StepContainer>
              {steps.map((step, index) => (
                <StepBox key={index}>
                  <>
                    {icons[index]}
                    <StepTitle
                      sx={{ mb: 1, fontSize: { xs: "20px", md: "24px" } }}
                    >
                      {step.title}
                    </StepTitle>
                    <StepText sx={{ mb: 1 }}>{step.description}</StepText>
                  </>
                </StepBox>
              ))}
            </StepContainer>
          </PlatformContainer>
        </Fade>

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
          <PartMask>
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
          </PartMask>
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
              paddingBottom: "50px",
              mt: "70px",
              maxWidth: "100vw",
              fontSize: { md: "45px", xs: "35px" },
            }}
          >
            Technical FAQ's
          </WhiteText>
          <WhiteBackgroundAccordion>
            <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
              <AccordionText sx={{ fontSize: { md: "22px", xs: "18px" } }}>
                How do I place an order on MUIAA Feeds
              </AccordionText>
            </WhiteBackgroundAccordionSummary>
            <WhiteBackgroundAccordionDetails>
              <AccordionText2 sx={{ fontSize: { md: "18px", xs: "16px" } }}>
                You can place an order through either Whatsapp or our Webstore.
                Simply reach out to us through the provided channels, and our
                team will guide you through the process.
              </AccordionText2>
            </WhiteBackgroundAccordionDetails>
          </WhiteBackgroundAccordion>
          <WhiteBackgroundAccordion>
            <WhiteBackgroundAccordionSummary
              sx={{ fontSize: { md: "25px", xs: "18px" } }}
              expandIcon={<MaximizeIcon />}
            >
              <AccordionText sx={{ fontSize: { md: "22px", xs: "20px" } }}>
                How does blockchain technology benefit MUIAA Feeds?
              </AccordionText>
            </WhiteBackgroundAccordionSummary>
            <WhiteBackgroundAccordionDetails>
              <AccordionText2 sx={{ fontSize: { md: "18px", xs: "16px" } }}>
                We utilize Smart logistics contracts on the XDC blockchain to
                streamline transportation arrangements and optimize routes. This
                helps in reducing transportation costs and ensures efficient
                delivery of orders.
              </AccordionText2>
            </WhiteBackgroundAccordionDetails>
          </WhiteBackgroundAccordion>
          <WhiteBackgroundAccordion>
            <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
              <AccordionText sx={{ fontSize: { md: "22px", xs: "18px" } }}>
                How does tokenization contribute to traceability?{" "}
              </AccordionText>
            </WhiteBackgroundAccordionSummary>
            <WhiteBackgroundAccordionDetails>
              <AccordionText2 sx={{ fontSize: { md: "18px", xs: "16px" } }}>
                Tokenization allows us to record transportation details on the
                blockchain, including shipment status, location, and estimated
                time of arrival.
              </AccordionText2>
            </WhiteBackgroundAccordionDetails>
          </WhiteBackgroundAccordion>
          <WhiteBackgroundAccordion>
            <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
              <AccordionText sx={{ fontSize: { md: "22px", xs: "18px" } }}>
                What are the advantages of using XDC tokens for cross-border
                payments?{" "}
              </AccordionText>
            </WhiteBackgroundAccordionSummary>
            <WhiteBackgroundAccordionDetails>
              <AccordionText2 sx={{ fontSize: { md: "18px", xs: "16px" } }}>
                Using XDC tokens for cross-border payments eliminates currency
                exchange fees and delays, making transactions faster and more
                cost-effective for both parties involved.
              </AccordionText2>
            </WhiteBackgroundAccordionDetails>
          </WhiteBackgroundAccordion>
          <WhiteBackgroundAccordion>
            <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
              <AccordionText sx={{ fontSize: { md: "22px", xs: "18px" } }}>
                 Is MUIAA Feeds available for international orders?
              </AccordionText>
            </WhiteBackgroundAccordionSummary>
            <WhiteBackgroundAccordionDetails>
              <AccordionText2 sx={{ fontSize: { md: "18px", xs: "16px" } }}>
                Yes, MUIAA Feeds facilitates cross-border transactions, allowing
                customers from different regions to place orders seamlessly.
              </AccordionText2>
            </WhiteBackgroundAccordionDetails>
          </WhiteBackgroundAccordion>
          <WhiteBackgroundAccordion>
            <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
              <AccordionText sx={{ fontSize: { md: "22px", xs: "18px" } }}>
                How can I track my order once it's been placed?
              </AccordionText>
            </WhiteBackgroundAccordionSummary>
            <WhiteBackgroundAccordionDetails>
              <AccordionText2 sx={{ fontSize: { md: "18px", xs: "16px" } }}>
                Once your order is processed, you will receive a unique tracking
                ID that you can use to monitor the status of your shipment in
                real-time through our platform.
              </AccordionText2>
            </WhiteBackgroundAccordionDetails>
          </WhiteBackgroundAccordion>
          <WhiteBackgroundAccordion>
            <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
              <AccordionText sx={{ fontSize: { md: "22px", xs: "18px" } }}>
                What measures does MUIAA Feeds take to ensure product quality?
              </AccordionText>
            </WhiteBackgroundAccordionSummary>
            <WhiteBackgroundAccordionDetails>
              <AccordionText2 sx={{ fontSize: { md: "18px", xs: "16px" } }}>
                We work closely with our suppliers, animal health experts,
                veterinary regulators, and implement stringent quality assurance
                measures to maintain the highest standards of product quality.
              </AccordionText2>
            </WhiteBackgroundAccordionDetails>
          </WhiteBackgroundAccordion>
          <WhiteBackgroundAccordion>
            <WhiteBackgroundAccordionSummary expandIcon={<MaximizeIcon />}>
              <AccordionText sx={{ fontSize: { md: "22px", xs: "18px" } }}>
                 How can I contact MUIAA Feeds for further assistance?
              </AccordionText>
            </WhiteBackgroundAccordionSummary>
            <WhiteBackgroundAccordionDetails>
              <AccordionText2 sx={{ fontSize: { md: "18px", xs: "16px" } }}>
                You can reach out to our customer support team through the
                contact information provided on our website or by sending us an
                email.
              </AccordionText2>
            </WhiteBackgroundAccordionDetails>
          </WhiteBackgroundAccordion>
          <br />
          <br />
          <Box sx={{ width: "100%", textAlign: "center", mt: "50px" }}>
            <SeamlessMainText
              sx={{
                color: "#fff",
                fontWeight: "400",
                lineHeight: "60px",
                fontSize: { xs: "28px", md: "40px", xl: "48px" },
                letterSpacing: "-2px",
                textAlign: "center",
                width: "100%",
                maxWidth: "700px",
                margin: "auto",
                marginBottom: "20px",
              }}
            >
              Get Started
            </SeamlessMainText>
            <UnparalleledSubText
              sx={{
                fontSize: { md: "24px", xl: "28px" },
                fontWeight: "300",
                lineHeight: { xs: "30px", md: "44px" },
                color: "#ffff",
                textAlign: "center",
                width: "100%",
                margin: "auto",
                marginBottom: "20px",
              }}
            >
              Hundreds of people already going cross-border with us. What are
              you waiting for?
            </UnparalleledSubText>
            <br />
            <NavButton2 sx={{ minWidth: "200px", maxWidth: "262px" }}>
              Get Started
            </NavButton2>
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
