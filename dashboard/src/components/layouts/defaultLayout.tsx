import React from 'react';
import HeadMetaData from '../common-components/headMetadata';
import { LayoutProps } from '@/types/layout-types';
import Navbar from '../common-components/navbar';
import Footer from '../common-components/footer';
import { PageWrapper } from '@/styles/common-styles';

const DefaultLayout = ({ children, pageTitle }: LayoutProps) => {
  const renderFooter = true;

  return (
    <PageWrapper isFooterRendered={renderFooter}>
      <HeadMetaData pageTitle={pageTitle} />
      <Navbar />
      <main>{children}</main>
      {renderFooter && <Footer />}
    </PageWrapper>
  );
};

export default DefaultLayout;
