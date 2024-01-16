import {
  NavBarButtonsContainer,
  NavButton,
  NavButton2,
  NavbarContainer,
  NavbarLinksContainer,
  NavbarMiniContainer,
} from "@/StyledComponents/Navbar";
import React from "react";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarMiniContainer>
        <img src="assets/logo.svg" />
        <NavbarLinksContainer sx={{ display: { md: "flex", xs: "none" } }}>
          <a href="#">Home</a>
          <a href="#">How it works</a>
          <a href="#">Solutions</a>
          <a href="#">About</a>
        </NavbarLinksContainer>
        <NavBarButtonsContainer>
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
