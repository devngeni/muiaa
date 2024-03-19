import WithSidebarLayout from '@/components/layouts/with-sidebar';
import OverviewSection from '@/components/overview.page/OverviewSection';
import React from 'react';

const Overview = () => {
  return (
    <WithSidebarLayout pageTitle="Overview | Muiaa">
      <OverviewSection />
    </WithSidebarLayout>
  );
};

export default Overview;
