import WithSidebarLayout from "@/components/layouts/with-sidebar";
import OverviewSection from "@/components/overview.page/OverviewSection";
import DefaultLayout from "@/components/layouts/defaultLayout";
import React from "react";

const Overview = () => {
  return (
    <DefaultLayout>
      <WithSidebarLayout pageTitle="Overview | Muiaa">
        <OverviewSection />
      </WithSidebarLayout>
    </DefaultLayout>
  );
};

export default Overview;
