import React from 'react';
import Sidebar from '../common-components/sidebar';
import HeadMetaData from '../common-components/headMetadata';
import { StyledSidebarWrapper } from '@/styles/common-styles';

const WithSidebarLayout = ({
  children,
  pageTitle
}: {
  children: React.ReactNode;
  pageTitle: string;
}) => {
  return (
    <StyledSidebarWrapper>
      <HeadMetaData pageTitle={pageTitle} />
      <Sidebar />
      <main>{children}</main>
    </StyledSidebarWrapper>
  );
};

export default WithSidebarLayout;
