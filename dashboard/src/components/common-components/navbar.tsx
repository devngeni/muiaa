import React, { useEffect } from "react";
import Image from "next/image";
import { NavbarContainer, SearchContainer } from "@/styles/navbar-styles";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { GrayButton, TextButtons } from "@/styles/common-styles";
import Link from "next/link";
import { useRouter } from "next/router";
import DropDownModal from "./dropDownModal";
import {jwtDecode} from "jwt-decode";
import { decode } from "jwt-js-decode";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const toggleDropDownModal = () => setOpen(!open);
  const [userData, setUserData] = React.useState<any>();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up(1000));

  useEffect(() => {
    if (!isDesktop) {
      setOpen(false);
    }
  }, [isDesktop]);

  const { token }: any = router.query;
  console.log(token);
  console.log(decode(token).payload.given_name);
  if (token) {
    sessionStorage.setItem("auth_token", JSON.stringify(token));
  }
  const auth_token = JSON.parse(sessionStorage.getItem("auth_token"));
  console.log(auth_token);
  const profile_data = decode(auth_token).payload;
  useEffect(() => {
    setUserData(profile_data);
    console.log(userData);
  }, []);
  if (!auth_token) {
    // router.push(`${process.env.NEXT_PUBLIC_LANDING_PAGE}`);
    sessionStorage.setItem("auth_token","eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im13dTVSYzUyTTQtamUwWDJUeU15TiJ9.eyJnaXZlbl9uYW1lIjoiQ29sbGlucyIsImZhbWlseV9uYW1lIjoiS29lY2giLCJuaWNrbmFtZSI6ImNvbGxpbnNrb2VjaGNrMzQiLCJuYW1lIjoiQ29sbGlucyBLb2VjaCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJOHR2a1g3OWNjU2p6M1JmTXlMUmNSVXhNdUd2aFZXcW9PTDRrcnZvcUwwc0pGRDd2WT1zOTYtYyIsImxvY2FsZSI6ImVuLUdCIiwidXBkYXRlZF9hdCI6IjIwMjQtMDQtMTVUMTA6MTc6NTkuNTgxWiIsImVtYWlsIjoiY29sbGluc2tvZWNoY2szNEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9kZXYtYXVlbW80b2Nwc2J6eDJ2Ny51cy5hdXRoMC5jb20vIiwiYXVkIjoiM2Y1aG55ckV5RExOb05SWFZGRm1hOTBTZ2R4d09ZV08iLCJpYXQiOjE3MTMxNzYyODAsImV4cCI6MTcxMzIxMjI4MCwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDM0MzQ1NjQ4MjU3OTMwNDc4MjQiLCJzaWQiOiJQeEFVenlneG1YTEhDUG5TTFcwdXZDNG91ZHdxdjhCZSIsIm5vbmNlIjoiRFdrb2JZZjZnOTlJYUNhMkZNVkJMNWdOSkNhOWd3SFZWNXd2NEhFZWQ3ayJ9.azsVG7XIkBMEFMnkDIAcFJsdxXTjDKSYJXTILUQUnk4Arg3Qjtl9iFI21inOI7BYl_wQU-7t7SpUdIyssib9m2v8wCh4BoFklOP7Ynt8kqSgeJ56FGNZgTjm71E58OycxS3DWLmlHuHub1GoACdlZW7hksIuVTNwtL9xXoeJ2XX_Xqn7PzLsu00fH-9oxiX5smjlB894CuS0w1-S5tENvAlCZAVr5wf-lczs345phXysMYqnyZNS1ZNo5kRt4x4n1dQhf39PyAbwBYIx3mD5w7NpFx1gk4VRimKnwhn1AGrQP4UqVnT6GfTJmMwkpi1SFz7p77mOaU_Ia42KjYBarw");
  }
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
        {/* <Box sx={{ display: 'flex', gap: '10px' }}>
          <br/>
           {data?.given_name}
           </Box> */}
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Link href={"/track-order/my-account"}>
            <GrayButton>{userData?.given_name}</GrayButton>
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
