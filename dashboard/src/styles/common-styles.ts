import { Box, Button, styled } from '@mui/material';

interface commonStylesProps {
  isFooterRendered?: boolean;
}

export const PageWrapper = styled(Box)<commonStylesProps>((props) => ({
  main: {
    width: '100%',
    minHeight: props.isFooterRendered ? 'calc(100vh - (66px + 89px))' : 'calc(100vh - 66px)'
  }
}));

export const TextButtons = styled(Button)(() => ({
  textTransform: 'none',
  fontFamily: 'Inter',
  fontWeight: 400,
  height: '38px',
  fontSize: '16px',
  color: '#FFFFFF',

  ':hover': {
    backgroundColor: 'transparent'
  }
}));

export const GrayButton = styled(Button)(() => ({
  textTransform: 'none',
  fontFamily: 'Inter',
  height: '38px',
  fontWeight: 400,
  fontSize: '16px',
  color: '#FFFFFF',
  borderRadius: '4px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  minWidth: '0px',

  ':hover': {
    backgroundColor: '#5F5F5F'
  },

  '&.Button_before': {
    img: {
      width: '20px',
      height: '20px'
    },

    '::before': {
      position: 'absolute',
      content: "''",
      width: '5px',
      height: '5px',
      backgroundColor: '#E8AD4B',
      top: '4px',
      right: '5px',
      borderRadius: '50%'
    }
  }
}));

export const StyledSidebarWrapper = styled(Box)({
  display: 'flex',
  'flex-direction': 'row',
  gap: '10px'
});

export const TopBarContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  justifyContent: 'space-between',  
  borderBottom: '1px solid #E8E8E8',
  margin:"20px  auto",
  maxWidth:"1300px",
  alignItems:"center",
  paddingBottom:"20px"
});

export const MidCardContainer = styled(Box)({
  maxWidth:"680px",
  background:"#fff",
  padding:"40px",
  minHeight:"500px",
  width:"100%",
  boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
  margin:"auto",
  borderRadius:"10px",
})