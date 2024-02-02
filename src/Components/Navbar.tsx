import {
  NavBarButtonsContainer,
  NavButton,
  NavButton2,
  NavbarContainer,
  NavbarLinksContainer,
  NavbarLogoItem,
  NavbarMiniContainer,
} from "@/StyledComponents/Navbar";
import React from "react";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarMiniContainer container>
        <NavbarLogoItem item md={2} xs={6}>
          <img src="assets/logo.svg" />
        </NavbarLogoItem>
        <NavbarLinksContainer sx={{ display: { md: "flex", xs: "none" } }} item md={4} xs={0}>
          <a href="/">Home</a>
          <a href="/how-it-works">How it works</a>
          <a href="#">Solutions</a>
          <a href="/about">About</a>
        </NavbarLinksContainer>
        <NavBarButtonsContainer item md={4} xs={6}>
          <NavButton href="#">Explore App</NavButton>
          <NavButton2 href="#" sx={{ display: { md: "block", xs: "none" } }}>
            Get in Touch
          </NavButton2>
        </NavBarButtonsContainer>
      </NavbarMiniContainer>
    </NavbarContainer>
  );
}

export default Navbar;
