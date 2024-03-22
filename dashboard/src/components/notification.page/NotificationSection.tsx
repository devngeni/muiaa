import {
  NotificationSectionCardsWrapper,
  NotificationPageContainer,
} from "@/styles/notificationPagetStyles";
import React, { useState } from "react";
import NotificationCard from "./NotificationCard";
import NotificationDetails from "./NotificationDetails";

const notificationList = [
  {
    name: "Disptcher",
    status: "Order Confirmation",
    desc: "Thank you for choosing Dairy Delight! Your selected dairy products are confirmed. Expect delivery by 2pm. We hope you enjoy our fresh and wholesome offerings",
    img: "/assets/overview/person.png",
    timeStamp: "3h",
  },
  {
    name: "Disptcher",
    status: "Complete Your Purchase",
    desc: "Don't forget to complete your purchase! Make an onsite payment for your order #CF54676. Your satisfaction is our priority",
    img: "/assets/overview/person.png",
    timeStamp: "3h",
  },
  {
    name: "Disptcher",
    status: "Payment Successful",
    desc: "Great news! Your payment for order #[order number] has been successfully processed. Your dairy delights are on their way to you.",
    img: "/assets/overview/person.png",
    timeStamp: "3h",
  },
  {
    name: "Disptcher",
    status: "Delivery Rescheduled",
    desc: "Apologies for any inconvenience. Your delivery has been rescheduled to 17th January 2023. Thank you for your understanding.",
    img: "/assets/overview/person.png",
    timeStamp: "3h",
  },
];

const NotificationSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleNotificationClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <NotificationPageContainer>
      <NotificationSectionCardsWrapper>
        {notificationList.map((item, index) => {
          const { status, desc, img, timeStamp } = item;
          return (
            <NotificationCard
              key={index}
              index={index}
              handleOnClick={handleNotificationClick}
              isSelected={selectedIndex == index}
              title={status}
              desc={desc}
              img={img}
              timeStamp={timeStamp}
            />
          );
        })}
      </NotificationSectionCardsWrapper>
      <NotificationDetails
        name={notificationList[selectedIndex].name}
        timeStamp={notificationList[selectedIndex].timeStamp}
        orderStatus={notificationList[selectedIndex].status}
        desc={notificationList[selectedIndex].desc}
      />
    </NotificationPageContainer>
  );
};

export default NotificationSection;
