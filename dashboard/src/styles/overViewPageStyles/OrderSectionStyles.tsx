import { Box, OutlinedInput, Table, styled } from '@mui/material';

export const StyledOrderSectionContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
}));

export const StyledOrderSectionNav = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  h2: {
    color: '#14263E',
    fontFamily: 'Inter',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal'
  }
}));

export const StyledOrderSearchField = styled(OutlinedInput)(() => ({
  width: '380px',
  height: '48px',
  padding: '0.625rem 1.3125rem',
  alignItems: 'center',
  gap: '0.625rem',
  flexShrink: '0',
  borderRadius: ' 0.25rem',
  color: '#AAA8A7',
  fontFamily: 'Inter',
  fontSize: '0.875rem',
  fontWeight: '400'
}));

export const StyledOrderTable = styled(Table)(() => ({
  th: {
    color: '#003565',
    fontFamily: 'Inter',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal'
  },
  tbody: {
    tr: {
      td: {
        padding: '20px',
        color: '',
        fontFamily: 'Inter',
        fontSize: '0.875rem',
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: 'normal',
        cursor: 'pointer'
      },

      '.delivered': {
        maxWidth: 'fit-content',
        padding: '5px 5px',
        borderRadius: '8px',
        background: '#C0F9D3'
      },
      '.pending': {
        maxWidth: 'fit-content',
        padding: '5px 3px',
        borderRadius: '4px',
        background: '#FFE6AE'
      },

      ':hover': {
        background: '#F5F5F5'
      }
    }
  }
}));
