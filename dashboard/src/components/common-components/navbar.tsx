import React, { useEffect } from "react";
import Image from "next/image";
import { NavbarContainer, SearchContainer } from "@/styles/navbar-styles";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { GrayButton, TextButtons } from "@/styles/common-styles";
import Link from "next/link";
import { useRouter } from "next/router";
import DropDownModal from "./dropDownModal";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const toggleDropDownModal = () => setOpen(!open);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up(1000));

  useEffect(() => {
    if (!isDesktop) {
      setOpen(false);
    }
  }, [isDesktop]);

  return (
    <NavbarContainer>
      <Box className="navbar_items">
        <Box sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <Box className="logo" onClick={() => router.push("/")}>
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={138.86}
              height={46.29}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              "@media (max-width: 1000px)": {
                display: "none",
              },
            }}
          >
            <TextButtons>Support</TextButtons>
            <Link href={"/track-order/overview"}>
              <TextButtons>Track Order</TextButtons>
            </Link>
          </Box>
        </Box>

        <SearchContainer
          sx={{
            "@media (max-width: 1000px)": {
              display: "none",
            },
          }}
        >
          <Box className="icon">
            <Image
              src="/assets/searchIcon.svg"
              alt="search-icon"
              width={1}
              height={1}
            />
          </Box>
          <input type="text" placeholder="Search" />
        </SearchContainer>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Link href={"/login"}>
            <GrayButton sx={{ gap: "5px" }}>
              <Image
                src="/assets/loginIcon.svg"
                alt=""
                width={26.18}
                height={26.18}
              />
              Login
            </GrayButton>
          </Link>

          <GrayButton className="Button_before">
            <Image
              src="/assets/favIcon.svg"
              alt=""
              width={26.18}
              height={26.18}
            />
          </GrayButton>

          <GrayButton className="Button_before">
            <Image
              src="/assets/lockIcon.svg"
              alt=""
              width={26.18}
              height={26.18}
            />
          </GrayButton>

          <Box className="menu-icon-mobile">
            <Image
              src="/assets/searchIcon.svg"
              alt="search-icon"
              width={20}
              height={20}
            />
          </Box>

          <Box className="menu-icon-mobile">
            <Image
              src="/assets/menuIcon.svg"
              alt=""
              width={26}
              height={26}
              onClick={toggleDropDownModal}
            />
            {open && <DropDownModal handleClose={toggleDropDownModal} />}
          </Box>
        </Box>
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
