import React from 'react';
import { OverViewCardPropsType } from '@/types/Itypes';
import {
  StyledOverViewCardContainer,
  StyledOverviewCardTexWrapper
} from '@/styles/overViewPageStyles';

const OverviewCard = ({ value, title, icon }: OverViewCardPropsType) => {
  return (
    <StyledOverViewCardContainer>
      {icon}
      <StyledOverviewCardTexWrapper>
        <h2>{value}</h2>
        <h4>{title}</h4>
      </StyledOverviewCardTexWrapper>
    </StyledOverViewCardContainer>
  );
};

export default OverviewCard;
