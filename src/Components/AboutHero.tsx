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
import { Grid } from "@mui/material";
import React from "react";

function AboutHero() {
  return (
    <>
      <AboutMainHero>
        <AboutHeroContainer>
          <AboutUsText>About us</AboutUsText>
          <AboutUsText2 sx={{ fontSize: { md: "80px", xs: "50px" } }}>
            Building the Value in dairy supplies
          </AboutUsText2>
          <br />
          <AboutMiniText sx={{ maxWidth: "90vw", margin: "auto" }}>
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
          sx={{ width: "100%", maxWidth: "1000px", paddingBottom: {md:"500px", xs:"250px"} }}
        >
          <AboutUsText>About us</AboutUsText>
          <AboutMiniHeader sx={{ fontSize: { md: "60px", xs: "40px" } }}>
            Committed to delivering transparency, efficiency, and traceability
            in the supply chain
          </AboutMiniHeader>
          <br />
          <br />
          <br />
          <AboutDumbGrid container>
            <AboutDumbGridItem item xs={0} sm={6}></AboutDumbGridItem>
            <AboutDumbGridItem item xs={12} sm={6}>
              <AboutMiniText sx={{maxWidth:"90%", margin:"auto"}}>
                Lead qualification process entail a meticulous process of
                evaluating & categorizing potential leads to determine their
                quality and likelihood of conversion. We utilize advanced data
                analytics, AI-powered algorithms, Machine learning, & industry
                expertise to assess leads and deliver a refined list that helps
                your business grow
              </AboutMiniText>
            </AboutDumbGridItem>
          </AboutDumbGrid>
        </AboutHeroContainer>
      </AboutMainHero>
      <CowImageContainer>
        <CowsImage src="assets/cows.svg" />
      </CowImageContainer>
      <br/>
      <StatsContainer container>
        <StatItem item md={4} xs={12}>
          <NumbersContainer container>
            <NumbersItem item md={12} xs={6} sx={{textAlign:{md:"left", xs:"center"}}}>
              <StatNumber>50+</StatNumber>
              <StatText>Happy Clients</StatText>
            </NumbersItem>
            <NumbersItem item md={12} xs={6} sx={{textAlign:{md:"left", xs:"center"}}}>
              <StatNumber>266</StatNumber>
              <StatText>Smart Contracts</StatText>
            </NumbersItem>
            <NumbersItem item md={12} xs={6} sx={{textAlign:{md:"left", xs:"center"}}}>
              <StatNumber>45</StatNumber>
              <StatText>Export/Import Transactions</StatText>
            </NumbersItem>
          </NumbersContainer>
        </StatItem>
        <br/>
        <StatItem item md={6} xs={12}>
          <StatText>Impact</StatText>
          <br />
          <br />
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
            sx={{ lineHeight: "30px", fontSize: "20px" }}
          >
            Lead qualification process entail a meticulous process of evaluating
            & categorizing potential leads to determine their quality and
            likelihood of conversion. We utilize advanced data analytics,
            AI-powered algorithms, Machine learning, & industry expertise to
            assess leads and deliver a refined list that helps your business
            grow
          </StatText>
          <br />
          <br />
          <ServiceButton sx={{marginLeft:"30px"}}>Get our Service</ServiceButton>
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
            <StatText sx={{ fontWeight: "400" }}>Impact</StatText>
            <br />
            <AboutMiniHeader
              sx={{
                color: "#1A1A1A",
                padding: "0",
                fontSize: "30px",
                letterSpacing: "1",
              }}
            >
              Transformative blockachain-enhaced solutions built to connect and
              manage distribution
            </AboutMiniHeader>
            <br /> <br /> <br />
          </Grid>
          <Grid xs={12} md={4}>
            <ColHeaderText>Collaborative Vission</ColHeaderText>
            <br />
            <ColBodyText>
              Lead qualification process entail a meticulous process of
              evaluating & categorizing potential leads to determine their
              quality and likelihood of conversion.
            </ColBodyText>
          </Grid>
          <Grid xs={12} md={4}>
            <ColHeaderText>Powerful Innovation</ColHeaderText>
            <br />
            <ColBodyText>
              Lead qualification process entail a meticulous process of
              evaluating & categorizing potential leads to determine their
              quality and likelihood of conversion.
            </ColBodyText>
          </Grid>
          <Grid xs={12} md={4}>
            <ColHeaderText>International Reach</ColHeaderText>
            <br />
            <ColBodyText>
              Lead qualification process entail a meticulous process of
              evaluating & categorizing potential leads to determine their
              quality and likelihood of conversion.
            </ColBodyText>
          </Grid>
        </Grid>
      </AboutHeroContainer>
      <AboutMainHero
        sx={{
          minHeight: "auto",
          backgroundColor: "#fff",
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
          <AboutUsText2 sx={{ color: "#000", width: "100%" }}>
            Get Started
          </AboutUsText2>
          <br />
          <AboutMiniText sx={{ color: "#000", width: "100%" }}>
            Enabling the world to move value the way information moves today.
          </AboutMiniText>
          <br /> <br />
          <ServiceButton>Explore App</ServiceButton>
        </AboutHeroContainer>
        <br />
        <br />
      </AboutMainHero>
    </>
  );
}

export default AboutHero;
