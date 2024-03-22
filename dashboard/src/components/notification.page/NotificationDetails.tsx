import {
  NotificationDetailsContainer,
  NotificationDetailsStatusTypo,
  NotificationDetailsText,
  NotifierInfoWrapper,
} from "@/styles/notificationPagetStyles";
import { NotificationDetailsPropsType } from "@/types/Itypes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const NotificationDetails = ({
  name,
  orderStatus,
  desc,
  timeStamp,
}: NotificationDetailsPropsType) => {
  return (
    <NotificationDetailsContainer>
      <NotifierInfoWrapper>
        <Image
          width={62}
          height={62}
          src="/assets/overview/person.png"
          alt="person"
        />
        <Box>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body1">{timeStamp}</Typography>
        </Box>
      </NotifierInfoWrapper>
      <NotificationDetailsStatusTypo variant="h6">
        {orderStatus}
      </NotificationDetailsStatusTypo>
      <NotificationDetailsText variant="body1">{desc}</NotificationDetailsText>
    </NotificationDetailsContainer>
  );
};

export default NotificationDetails;
