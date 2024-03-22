import {
  NotificationCardTitleWrapper,
  NotificationCardWrapper,
  NotificationCardBody,
  NotificationCardBox,
} from "@/styles/notificationPagetStyles";
import { NotificationCardPropsType } from "@/types/Itypes";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const NotificationCard = ({
  title,
  desc,
  img,
  timeStamp,
  isSelected,
  index,
  handleOnClick,
}: NotificationCardPropsType) => {
  return (
    <NotificationCardWrapper
      isSelected={isSelected}
      onClick={() => handleOnClick(index)}
    >
      <Image width={50} height={50} src={`${img}`} alt={title} />
      <NotificationCardBox>
        <NotificationCardTitleWrapper>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">{timeStamp}</Typography>
        </NotificationCardTitleWrapper>
        <NotificationCardBody variant="body1">{desc}</NotificationCardBody>
      </NotificationCardBox>
    </NotificationCardWrapper>
  );
};

export default NotificationCard;
