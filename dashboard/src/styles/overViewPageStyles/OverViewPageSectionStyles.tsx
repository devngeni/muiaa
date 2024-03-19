import { Box, Grid, styled } from '@mui/material';

export const StyledOverViewSectionContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row'
}));

export const StyledOrderListContainer = styled(Box)(() => ({
  minHeight: '100vh',
  padding: '70px',
  borderRight: '3px dotted #E3E3E3',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px'
}));

export const StyledOverViewCardWrapper = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'space-between'
}));
