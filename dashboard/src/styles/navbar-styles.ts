import { Box, styled } from '@mui/material';

export const NavbarContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#14263E',
  color: '#FFFFFF',
  padding: '0 100px',
  height: '66px',

  '.navbar_items': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },

  '.logo': {
    width: '138.86px',
    height: '46.29px',
    img: {
      width: '100%',
      height: '100%'
    }
  }
}));

export const SearchContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '898px',
  height: '38px',
  borderRadius: '10px',
  background: 'rgba(255, 255, 255, 0.2)',
  padding: '0 20px',

  '.icon': {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    img: {
      height: '25px',
      width: '25px'
    }
  },

  input: {
    background: 'transparent',
    width: '100%',
    height: '100%',
    padding: '0 20px',
    border: 'none',
    outline: 'none',
    color: '#AAA8A7',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 400
  }
}));
