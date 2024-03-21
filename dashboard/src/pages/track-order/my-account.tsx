import DefaultLayout from "@/components/layouts/defaultLayout";
import WithSidebarLayout from "@/components/layouts/with-sidebar";
import { ProfileSection } from "@/components/profile.page";
import React from "react";

const MyAccount = () => {
  return (
    <DefaultLayout>
      <WithSidebarLayout pageTitle="My Account | Muiaa">
        <ProfileSection />
      </WithSidebarLayout>
    </DefaultLayout>
  );
};

export default MyAccount;
