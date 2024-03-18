import React from 'react';
import Image from 'next/image';
import { NavbarContainer, SearchContainer } from '@/styles/navbar-styles';
import { Box } from '@mui/material';
import { GrayButton, TextButtons } from '@/styles/common-styles';
import Link from 'next/link';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Box className="navbar_items">
        <Box sx={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Box className="logo">
            <Image src="/assets/logo.png" alt="logo" width={138.86} height={46.29} />
          </Box>
          <Box>
            <TextButtons>Support</TextButtons>
            <Link href={'/track-order/overview'}>
              {' '}
              <TextButtons>Track Order</TextButtons>
            </Link>
          </Box>
        </Box>

        <SearchContainer>
          <Box className="icon">
            <Image src="/assets/searchIcon.svg" alt="search-icon" width={1} height={1} />
          </Box>
          <input type="text" placeholder="Search" />
        </SearchContainer>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Link href={'/login'}>
            <GrayButton sx={{ gap: '5px' }}>
              <Image src="/assets/loginIcon.svg" alt="" width={26.18} height={26.18} /> Login
            </GrayButton>
          </Link>

          <GrayButton className="Button_before">
            <Image src="/assets/favIcon.svg" alt="" width={26.18} height={26.18} />
          </GrayButton>

          <GrayButton className="Button_before">
            <Image src="/assets/lockIcon.svg" alt="" width={26.18} height={26.18} />
          </GrayButton>
        </Box>
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
