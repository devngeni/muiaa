import {
  FooterHeader,
  FooterText,
  MainFooterContainer,
} from "@/StyledComponents/Footer";
import { Grid, Box } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { YouTube } from "@mui/icons-material";

function Footer() {
  return (
    <MainFooterContainer>
      <Grid container sx={{ width: "95%", margin: "auto", maxWidth: "1200px" }}>
        <Grid item xs={6} md={4}>
          <FooterHeader sx={{ color: "#E9BC6D" }}>Our platform</FooterHeader>
          <FooterText>Playstore</FooterText>
          <FooterText>Make an Order</FooterText>
        </Grid>
        <Grid item xs={6} md={4}>
          <FooterHeader sx={{ color: "#E9BC6D" }}>Quick Links</FooterHeader>
          <a href="/">
            <FooterText>Home</FooterText>
          </a>
          <a href="/how-it-works">
            <FooterText>How it Works</FooterText>
          </a>
          <a href="/about">
            <FooterText>About</FooterText>
          </a>
        </Grid>
        <Grid item xs={12} md={4}>
          <FooterHeader sx={{ color: "#E9BC6D" }}>Our Socials</FooterHeader>
          <Box sx={{ display: { xs: "flex" } }}>
            <FooterText>
              <FacebookIcon />
            </FooterText>
            <br />
            <FooterHeader>
              <InstagramIcon />
            </FooterHeader>
            <br />
            <FooterText>
              <TwitterIcon />
            </FooterText>
            <br />
            <FooterText>
              <YouTube />
            </FooterText>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            marginTop: "50px",
            paddingTop: "50px",
            borderTop: "2px solid #6A6A6A",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              display: "flex",
              flexWrap: "wrap",
              margin: "auto",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Box sx={{ maxWidth: "240px" }}>
              <img src="assets/logo.png" />
            </Box>
            <FooterText
              sx={{
                pl: { xs: "2px", md: "30px" },
                fontSize: { xs: "12px", md: "16px" },
              }}
            >
              All Rights Reserved &nbsp; &nbsp; | &nbsp;&nbsp; Terms of Use
              &nbsp; &nbsp; | &nbsp;&nbsp; Privacy Policy
            </FooterText>
          </Box>
        </Grid>
      </Grid>
    </MainFooterContainer>
  );
}

export default Footer;