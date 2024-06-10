import {
  StyledOrderListContainer,
  StyledOverViewSectionContainer,
} from "@/styles/overViewPageStyles";
import React, { useState } from "react";
import { OrderSection, OverViewCard } from "./";
import Order from "../../../public/assets/overview/order";
import Pending from "../../../public/assets/overview/pending";
import Shipped from "../../../public/assets/overview/shipped";
import Delivered from "../../../public/assets/overview/delivered";
import { Grid } from "@mui/material";
import OrderTrackSection from "./OrderTrackSection";

const OverviewSection = () => {
  const [selectedOrderIndex, setSelectedOrderIndex] = useState<number>();
  const handleOnOrderSelect = (index: number) => {
    setSelectedOrderIndex(index === selectedOrderIndex ? undefined : index);
  };

  const handleRemoveSelectedOrder = () => {
    setSelectedOrderIndex(undefined);
  };

  return (
    <StyledOverViewSectionContainer>
      <StyledOrderListContainer>
        <Grid container spacing={2}>
          <Grid item xs>
            <OverViewCard title="Total Orders" value="13" icon={<Order />} />
          </Grid>
          <Grid item xs>
            <OverViewCard
              title="Pending Confirmation"
              value="6"
              icon={<Pending />}
            />
          </Grid>
          <Grid item xs>
            <OverViewCard title="Shipped" value="13" icon={<Shipped />} />
          </Grid>
          <Grid item xs>
            <OverViewCard title="Delivered" value="13" icon={<Delivered />} />
          </Grid>
        </Grid>
        <OrderSection
          handleOnOrderSelect={handleOnOrderSelect}
          selectedIndex={selectedOrderIndex}
          title="My Orders"
        />
      </StyledOrderListContainer>
      <OrderTrackSection
        isSectionVisible={selectedOrderIndex !== undefined}
        handleRemoveSelectedOrder={handleRemoveSelectedOrder}
      />
    </StyledOverViewSectionContainer>
  );
};

export default OverviewSection;
