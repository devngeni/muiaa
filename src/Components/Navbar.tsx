import { NavBarButtonsContainer, NavButton, NavButton2, NavbarContainer, NavbarLinksContainer, NavbarMiniContainer } from '@/StyledComponents/Navbar'
import React from 'react'

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarMiniContainer>
        <img src="assets/logo.svg"/>
      <NavbarLinksContainer>
        <a href="#">Home</a>
        <a href="#">How it works</a>
        <a href="#">Solutions</a>
        <a href="#">About</a>
      </NavbarLinksContainer>
      <NavBarButtonsContainer>
        <NavButton href="#">Expplore App</NavButton>
        <NavButton2 href="#">Get in Touch</NavButton2>
      </NavBarButtonsContainer>
      </NavbarMiniContainer>
    </NavbarContainer>
  )
}

export default Navbar