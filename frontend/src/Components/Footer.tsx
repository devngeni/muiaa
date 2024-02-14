import { FooterHeader, FooterText, MainFooterContainer } from '@/StyledComponents/Footer'
import { Grid } from '@mui/material'
import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { YouTube } from '@mui/icons-material';

function Footer() {
  return (
    <MainFooterContainer>
      <Grid container sx={{ width: "95%", margin: "auto" }}>
        <Grid item xs={12} md={3}>
          <img src="assets/logo.svg" />
          <br />
          <FooterText>
            Cutting-edge cross-border cattle feed distribution enterprise
          </FooterText>
          <br />
          <FooterText>
            Terms of Use &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Privacy Policy
          </FooterText>
        </Grid>
        <Grid item xs={6} md={3}>
          <FooterHeader>Our platform</FooterHeader>
          <FooterText>App Store</FooterText>
          <FooterText>Play Store</FooterText>
          <FooterText>Make an Order</FooterText>
          <FooterText>Docs</FooterText>
        </Grid>
        <Grid item xs={6} md={3}>
          <FooterHeader>Quick Links</FooterHeader>
          <FooterText>Home</FooterText>
          <FooterText>How it Works</FooterText>
          <FooterText>Ecosystem</FooterText>
          <FooterText>About</FooterText>
          <FooterText> Back to Top</FooterText>
        </Grid>
        <Grid item xs={12} md={3} sx={{display:{md:"block", xs:"flex"}}}>
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
        </Grid>
      </Grid>
    </MainFooterContainer>
  );
}

export default Footer