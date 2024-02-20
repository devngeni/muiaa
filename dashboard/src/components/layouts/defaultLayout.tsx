import React from "react";
import HeadMetaData from "../common-components/headMetadata";
import { LayoutProps } from "@/types/layout-types";
import Navbar from "../common-components/navbar";
import Footer from "../common-components/footer";
import { PageWrapper } from "@/styles/common-styles";

const DefaultLayout = ({ children, pageTitle }: LayoutProps) => {
  return (
    <PageWrapper>
      <HeadMetaData pageTitle={pageTitle} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </PageWrapper>
  );
};

export default DefaultLayout;
