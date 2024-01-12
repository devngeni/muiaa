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
} from "@/StyledComponents/AboutHero";
import React from "react";

function AboutHero() {
  return (
    <>
      <AboutMainHero>
        <AboutHeroContainer>
          <AboutUsText>About us</AboutUsText>
          <AboutUsText2>Building the Value in dairy supplies</AboutUsText2>
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
        <br />
        <br />
        <br />
        <br />
        <AboutHeroContainer sx={{ minWidth: "1000px", paddingBottom: "500px" }}>
          <AboutUsText>About us</AboutUsText>
          <AboutMiniHeader>
            Committed to delivering transparency, efficiency, and traceability
            in the supply chain
          </AboutMiniHeader>
          <br />
          <br />
          <br />
          <AboutDumbGrid container>
            <AboutDumbGridItem item xs={0} sm={6}></AboutDumbGridItem>
            <AboutDumbGridItem item xs={12} sm={6}>
              <AboutMiniText>
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
        <br />
        <br />
        <br />
      </AboutMainHero>
      <CowImageContainer>
        <CowsImage src="assets/cows.svg" />
      </CowImageContainer>
      <StatsContainer container>
        <StatItem item md={4} xs={12}>
          <NumbersContainer container>
            <NumbersItem item md={12}>
              <StatNumber>50+</StatNumber>
              <StatText>Happy Clients</StatText>
            </NumbersItem>
            <NumbersItem item md={12}>
              <StatNumber>266</StatNumber>
              <StatText>Smart Contracts</StatText>
            </NumbersItem>
            <NumbersItem item md={12}>
              <StatNumber>45</StatNumber>
              <StatText>Export/Import Transactions</StatText>
            </NumbersItem>
          </NumbersContainer>
        </StatItem>
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
            sx={{ lineHeight: "30px", width: "100%", fontSize: "20px" }}
          >
            Lead qualification process entail a meticulous process of evaluating
            & categorizing potential leads to determine their quality and
            likelihood of conversion. We utilize advanced data analytics,
            AI-powered algorithms, Machine learning, & industry expertise to
            assess leads and deliver a refined list that helps your business
            grow
          </StatText>
          <br/><br/>
          <ServiceButton>Get our Service</ServiceButton>
        </StatItem>
      </StatsContainer>
    </>
  );
}

export default AboutHero;
