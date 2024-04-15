import {
  AboutDumbGrid,
  AboutHeroContainer,
  AboutMainHero,
  AboutMiniHeader,
  AboutMiniText,
  AboutUsText,
  AboutUsText2,
  AboutDumbGridItem,
  CowsImage,
  CowImageContainer,
  StatsContainer,
  StatItem,
  NumbersContainer,
  NumbersItem,
  StatNumber,
  StatText,
  ServiceButton,
  ColHeaderText,
  ColBodyText,
} from "@/StyledComponents/AboutHero";
import { Grid, Box, styled } from "@mui/material";
import CountUp from "react-countup";
import React from "react";
import { Fade } from "react-awesome-reveal";

function AboutHero() {
  const CowImage = styled("img")({
    width: "100%",
    height: "auto",
  });
  return (
    <>
      <AboutMainHero>
        <AboutHeroContainer>
          <AboutUsText>About us</AboutUsText>
          <AboutUsText2
            sx={{
              fontSize: { md: "80px", xs: "40px" },
              lineHeight: { md: "96px", xs: "55px" },
            }}
          >
            Building the value in dairy supplies using blockchain technology.
          </AboutUsText2>
          <br />
          <AboutMiniText>
            Enabling the world to move value the way information moves today.
          </AboutMiniText>
        </AboutHeroContainer>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <AboutHeroContainer
          sx={{
            width: "100%",
            // maxWidth: "1000px",
            paddingBottom: { md: "500px", xs: "0px" },
          }}
        >
          <AboutUsText>Mission</AboutUsText>
          <AboutMiniHeader
            sx={{ fontSize: { md: "60px", xs: "40px" }, minHeight: "200px" }}
          >
            Our goal? To bring transparency,efficiency and traceability to every
            step of the supply chain.
          </AboutMiniHeader>
          <br />
          <br />
          <br />
          <AboutDumbGrid container>
            <AboutDumbGridItem
              item
              xs={12}
              sm={6}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Fade direction="left">
                <Box
                  sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    marginBottom: { md: "0", xs: "50px" },
                  }}
                ></Box>
              </Fade>
            </AboutDumbGridItem>
            <AboutDumbGridItem item xs={12} sm={6}>
              <Fade direction="right">
                <AboutMiniText
                  sx={{
                    maxWidth: "90%",
                    margin: "auto",
                    marginBottom: { md: "0", xs: "50px" },
                  }}
                >
                  Our mission is to spearhead a transformative era in
                  cross-border cattle feed distribution,uniting Kenya and
                  Zanzibar through innovative technology and sustainable
                  practices. Powered by the XDC blockchain,Our decentralised
                  platform offers farmers and distributors a seamless ordering
                  process, real-time monitoring, and automated smart contracts,
                  while our dedication to quality and education propels us
                  towards redefining the future of feed distribution.
                </AboutMiniText>
              </Fade>
            </AboutDumbGridItem>
          </AboutDumbGrid>
        </AboutHeroContainer>
      </AboutMainHero>
      <CowImageContainer
        sx={{
          marginTop: { md: "-400px", xs: "100px" },
          height: { md: "600px", xs: "auto" },
        }}
      >
        <Fade direction="up">
          <CowsImage src="assets/cows.svg" />
        </Fade>
      </CowImageContainer>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <StatsContainer container>
        <StatItem item md={4} xs={12}>
          <NumbersContainer container>
            <NumbersItem
              item
              md={12}
              xs={6}
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              <Fade direction="left">
                <StatNumber sx={{ fontSize: { md: "50px", xs: "35px" } }}>
                  <CountUp end={50} duration={10} /> +
                </StatNumber>
              </Fade>
              <Fade direction="left">
                <StatText sx={{ fontSize: { md: "24px", xs: "20px" } }}>
                  Happy Clients
                </StatText>
              </Fade>
            </NumbersItem>
            <NumbersItem
              item
              md={12}
              xs={6}
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              <Fade direction="left">
                <StatNumber sx={{ fontSize: { md: "50px", xs: "35px" } }}>
                  <CountUp end={266} duration={10} />
                </StatNumber>
              </Fade>
              <Fade direction="left">
                <StatText sx={{ fontSize: { md: "24px", xs: "20px" } }}>
                  Smart Contracts
                </StatText>
              </Fade>
            </NumbersItem>
            <NumbersItem
              item
              md={12}
              xs={6}
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              <Fade direction="left">
                <StatNumber sx={{ fontSize: { md: "50px", xs: "35px" } }}>
                  <CountUp end={45} duration={10} />
                </StatNumber>
              </Fade>
              <Fade direction="left">
                <StatText sx={{ fontSize: { md: "24px", xs: "16px" } }}>
                  Export/Import Transactions
                </StatText>
                <br />
                <br />
              </Fade>
            </NumbersItem>
          </NumbersContainer>
        </StatItem>
        <br />
        <StatItem item md={6} xs={12}>
          <StatText>Impact</StatText>
          <br />
          <br />
          <Fade direction="right">
            <AboutMiniHeader
              sx={{
                color: "#1A1A1A",
                padding: "0",
                fontSize: "30px",
                letterSpacing: "1",
              }}
            >
              Committed to delivering transparency, efficiency, and traceability
              in the supply chain
            </AboutMiniHeader>
            <br />
            <br />
            <StatText
              sx={{ lineHeight: { md: "30px", xs: "24px" }, fontSize: "20px" }}
            >
              Lead qualification process entail a meticulous process of
              evaluating & categorizing potential leads to determine their
              quality and likelihood of conversion. We utilize advanced data
              analytics, AI-powered algorithms, Machine learning, & industry
              expertise to assess leads and deliver a refined list that helps
              your business grow
            </StatText>
            <br />
            <br />
            <ServiceButton>Get our Service</ServiceButton>
          </Fade>
        </StatItem>
      </StatsContainer>
      <br />
      <br />
      <br />

      <AboutHeroContainer
        sx={{
          width: "100%",
          maxWidth: "1350px",
          paddingBottom: "100px",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <StatText sx={{ fontWeight: "400", paddingTop: "50px" }}>
              Impact
            </StatText>
            <br />
            <AboutMiniHeader
              sx={{
                color: "#1A1A1A",
                padding: "0",
                fontSize: "30px",
                letterSpacing: "1",
                minHeight: "200px",
              }}
            >
              Transformative blockachain-enhaced solutions built to connect and
              manage distribution
            </AboutMiniHeader>
            <br /> <br /> <br />
          </Grid>
          <Grid xs={12} md={4}>
            <Fade direction="left">
              <ColHeaderText>Transparency</ColHeaderText>
              <br />
              <ColBodyText>
                Fraud and misinformation is rampant in every business and to
                avoid that we have to verify the authenticity and quality of
                feed. This empowers you with real time insights into the impact
                and sustainability initiatives being undertaken on the ground
                .You can trace thanks to blockchain in supply chains.
              </ColBodyText>
            </Fade>
          </Grid>
          <Grid xs={12} md={4}>
            <Fade direction="up">
              <ColHeaderText>Cost efficiency </ColHeaderText>
              <br />
              <ColBodyText>
                Using Smart agriculture gadgets empower farmers to enhance
                control, predictability, and efficiency in livestock raising and
                crop cultivation.With streamlined supply chains ,less wastage
                ,and timely payments ,you are saving money and gaining control.
                This reduces reliance on fluctuating supplies.
              </ColBodyText>
            </Fade>
          </Grid>
          <Grid xs={12} md={4}>
            <Fade direction="right">
              <ColHeaderText>Empowerment</ColHeaderText>
              <br />
              <ColBodyText>
                Small-scale farmers can negotiate better terms, access
                information, and connect with a wider network of suppliers and
                buyers through blockchain technology.With personalised profiles
                and loan management, you'll have top-notch digital
                record-keeping.
              </ColBodyText>
            </Fade>
          </Grid>
        </Grid>
      </AboutHeroContainer>
      <Box
        sx={{
          minHeight: "auto",
          backgroundColor: "#fff !important",
          textAlign: "center",
        }}
      >
        <AboutHeroContainer
          sx={{
            background: "#fff",
            textAlign: "center",
            maxWidth: "100vw",
          }}
        >
          <AboutUsText2
            sx={{
              color: "#000",
              width: "100%",
              fontSize: { md: "80px", xs: "40px" },
            }}
          >
            Get Started
          </AboutUsText2>
          <br />
          <AboutMiniText
            sx={{
              color: "#000",
              width: "100%",
              fontSize: { md: "28px", xs: "16px" },
            }}
          >
            Enabling the world to move value the way information moves today.
          </AboutMiniText>
          <br /> <br />
          <ServiceButton>Make an Order</ServiceButton>
        </AboutHeroContainer>
        <br />
        <br />
      </Box>
    </>
  );
}

export default AboutHero;
