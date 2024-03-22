import DefaultLayout from "@/components/layouts/defaultLayout";
import WithSidebarLayout from "@/components/layouts/with-sidebar";
import { NotificationSection } from "@/components/notification.page";
import React from "react";

const Notification = () => {
  return (
    <DefaultLayout>
      <WithSidebarLayout pageTitle="Notification | Muiaa">
        <NotificationSection />
      </WithSidebarLayout>
    </DefaultLayout>
  );
};

export default Notification;
