import { Box, Grid, styled } from '@mui/material';

export const FooterContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  background: '#14263E',
  color: '#FFFFFF',
  padding: '10px 20px',
  minHeight: '89px',
  flexWrap:"wrap"
}));
 export const FooterLinksContainer = styled(Grid)({
  maxWidth:"500px"
 })

 export const FooterLink = styled(Grid)({
  cursor:"pointer",
  minHeight:"50px",
  display:"flex",
  alignItems:"center"
 })