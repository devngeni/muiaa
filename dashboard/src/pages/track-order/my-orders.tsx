import DefaultLayout from "@/components/layouts/defaultLayout";
import WithSidebarLayout from "@/components/layouts/with-sidebar";
import { OrderSection } from "@/components/overview.page";
import OrderTrackSection from "@/components/overview.page/OrderTrackSection";
import {
  StyledMyOrderPageContainer,
  StyledOrderSectionWrapper,
} from "@/styles/myOrderPageStyles";
import React from "react";

const MyOrders = () => {
  const handleSelectedOrder = () => {};

  return (
    <DefaultLayout>
      <WithSidebarLayout pageTitle="My Orders | Muiaa">
        <StyledMyOrderPageContainer>
          <StyledOrderSectionWrapper>
            <OrderSection
              title="All Orders"
              handleOnOrderSelect={handleSelectedOrder}
            />
          </StyledOrderSectionWrapper>
          <OrderTrackSection />
        </StyledMyOrderPageContainer>
      </WithSidebarLayout>
    </DefaultLayout>
  );
};

export default MyOrders;
