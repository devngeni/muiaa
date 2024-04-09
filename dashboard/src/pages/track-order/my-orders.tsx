import DefaultLayout from "@/components/layouts/defaultLayout";
import WithSidebarLayout from "@/components/layouts/with-sidebar";
import { OrderSection } from "@/components/overview.page";
import OrderTrackSection from "@/components/overview.page/OrderTrackSection";
import {
  StyledMyOrderPageContainer,
  StyledOrderSectionWrapper,
} from "@/styles/myOrderPageStyles";
import React, { useState } from "react";

const MyOrders = () => {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>();
  const handleOnOrderSelect = (orderId: string) => {
    setSelectedOrderId(orderId);
  };

  const handleRemoveSelectedOrder = () => {
    setSelectedOrderId(undefined);
  };
  return (
    <DefaultLayout>
      <WithSidebarLayout pageTitle="My Orders | Muiaa">
        <StyledMyOrderPageContainer>
          <StyledOrderSectionWrapper>
            <OrderSection
              title="All Orders"
              handleOnOrderSelect={handleOnOrderSelect}
            />
          </StyledOrderSectionWrapper>
          <OrderTrackSection
            isSectionVisible={selectedOrderId !== undefined}
            handleRemoveSelectedOrder={handleRemoveSelectedOrder}
          />
        </StyledMyOrderPageContainer>
      </WithSidebarLayout>
    </DefaultLayout>
  );
};

export default MyOrders;
