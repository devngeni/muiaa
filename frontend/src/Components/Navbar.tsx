import React, { useState } from "react";
import {
  NavBarButtonsContainer,
  NavButton,
  NavButton2,
  NavbarContainer,
  NavbarLinksContainer,
  NavbarLogoItem,
  NavbarMiniContainer,
} from "@/StyledComponents/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import dotenv from "dotenv";
import { useRouter } from "next/router";
import Link from "next/link";

dotenv.config();

function Navbar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const router = useRouter();
  console.log(router.pathname);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const Linker = styled("a")({
    width: "100%",
    textAlign: "center",
    padding: "10px",
    color: "#000",
    textDecoration: "none",
    border: "1px solid red",
  });
  const ButtonCustom = styled(Box)({
    marginTop: "40px",
    width: "90%",
    margin: "auto",
    height: "50px",
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    paddingLeft: "20px",
    // add a hover effect
    "&:hover": {
      background: "rgba(255,255,255,0.1)",
      color: "#fff",
    },
  });

  return (
    <NavbarContainer>
      <NavbarMiniContainer container>
        <NavbarLogoItem item md={2} xs={6}>
          <img src="assets/logo.png" alt="Logo" />
        </NavbarLogoItem>
        {/* NavbarLinksContainer for larger screens */}
        <NavbarLinksContainer
          sx={{ display: { md: "flex", xs: "none" } }}
          item
          md={4}
          xs={0}
        >
          <Link className={router.pathname == "/" ? "active" : ""} href="/">
            Home
          </Link>
          <Link
            className={router.pathname == "/how-it-works" ? "active" : ""}
            href="/how-it-works"
          >
            How It Works
          </Link>
          <Link
            className={router.pathname == "/about" ? "active" : ""}
            href="/about"
          >
            About Us
          </Link>
        </NavbarLinksContainer>
        {/* NavBarButtonsContainer for larger screens */}
        <NavBarButtonsContainer
          item
          md={4}
          xs={6}
          sx={{ display: { md: "flex", xs: "none" } }}
        >
          <NavButton href={`${process.env.NEXT_PUBLIC_BACKEND_URI}auth0/login`}>
            Make Order
          </NavButton>
          <NavButton2 href="#">Get in Touch</NavButton2>
        </NavBarButtonsContainer>
        <MenuIcon
          onClick={toggleSidebar}
          sx={{
            display: { md: "none", xs: "block" },
            color: "orange",
            width: "40px",
            height: "40px",
          }}
        />
      </NavbarMiniContainer>

      {/* Sidebar for mobile */}
      {sidebarVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "50%",
            height: "auto",
            // background gradient from navy blue to black
            background:
              "linear-gradient(to bottom, rgb(3,61,102), rgb(0,0,0,0.9))",
            borderBottomLeftRadius: "20px",
            transition: "0.3s ease-in-out",
            zIndex: 1000,
            paddingTop: "23px",
            boxShadow: "0px 0px 100px 0px #000000",
            display: "block",
          }}
        >
          {/* Add your sidebar content here */}
          <Box
            sx={{
              width: "80%",
              margin: "auto",
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <Box>
              <CloseIcon onClick={toggleSidebar} sx={{ color: "#fff" }} />
            </Box>
            <br />
            <br />
            <Box sx={{ width: "100%", mt: "50px" }}>
              <img src="assets/logo.png" alt="Logo" style={{ width: "100%" }} />
            </Box>
          </Box>
          <a href="/" style={{ color: "#fff", fontWeight: "bolder" }}>
            <ButtonCustom>Home</ButtonCustom>
          </a>
          <a
            href="/how-it-works"
            style={{ color: "#fff", fontWeight: "bolder" }}
          >
            <ButtonCustom>How It Works</ButtonCustom>
          </a>
          <a href="/about" style={{ color: "#fff", fontWeight: "bolder" }}>
            <ButtonCustom>About Us</ButtonCustom>
          </a>
          <br />
          <br />
          <br />
        </div>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
