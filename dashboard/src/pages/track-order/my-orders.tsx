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
  const [selectedOrderIndex, setSelectedOrderIndex] = useState<number>();
  const handleOnOrderSelect = (index: number) => {
    setSelectedOrderIndex(index === selectedOrderIndex ? undefined : index);
  };

  const handleRemoveSelectedOrder = () => {
    setSelectedOrderIndex(undefined);
  };

  return (
    <DefaultLayout>
      <WithSidebarLayout pageTitle="My Orders | Muiaa">
        <StyledMyOrderPageContainer>
          <StyledOrderSectionWrapper>
            <OrderSection
              title="All Orders"
              handleOnOrderSelect={handleOnOrderSelect}
              selectedIndex={selectedOrderIndex}
            />
          </StyledOrderSectionWrapper>
          <OrderTrackSection
            isSectionVisible={selectedOrderIndex != undefined}
            handleRemoveSelectedOrder={handleRemoveSelectedOrder}
          />
        </StyledMyOrderPageContainer>
      </WithSidebarLayout>
    </DefaultLayout>
  );
};

export default MyOrders;
