import { Box, styled } from '@mui/material';

export const StyledOverViewCardContainer = styled(Box)(() => ({
  cursor: 'pointer',
  minWidth: '350',
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  alignItems: 'center',
  borderRadius: '10px',
  background: '#E8AD4B',
  padding: '38px 45px 38px 35px',
  transition: 'all 0.3s ease-in-out',
  ':hover': {
    transform: 'scale(1.05)'
  }
}));

export const StyledOverviewCardTexWrapper = styled(Box)(() => ({
  h2: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '1.75rem;',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal'
  },
  h4: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }
}));
