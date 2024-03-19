import React from 'react';
import { OverViewCardPropsType } from '@/types/Itypes';
import {
  StyledOverViewCardContainer,
  StyledOverviewCardTexWrapper
} from '@/styles/overViewPageStyles';
import { Typography } from '@mui/material';

const OverviewCard = ({ value, title, icon }: OverViewCardPropsType) => {
  return (
    <StyledOverViewCardContainer>
      {icon}
      <StyledOverviewCardTexWrapper>
        <Typography variant='h2'>{value}</Typography>
        <Typography variant='h4'>{title}</Typography>
      </StyledOverviewCardTexWrapper>
    </StyledOverViewCardContainer>
  );
};

export default OverviewCard;
