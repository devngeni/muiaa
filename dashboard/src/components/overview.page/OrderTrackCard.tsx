import React from "react";
import Checked from "../../../public/assets/overview/checked";
import Link from "next/link";
import {
  StyledOrderTrackCardTitleSubWrapper,
  StyledOrderTrackCardTitleMainWrapper,
  StyledPersonInfoWrapper,
  StyledTrackOrderCardContainer,
  StyledNotStartedContainer,
  StyledOrderTrackDescTypography,
  StyledTimestampTypography,
} from "@/styles/overViewPageStyles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { OrderTrackCardPropsType } from "@/types/Itypes";
import NotChecked from "../../../public/assets/overview/notChecked";

const OrderTrackCard = ({
  title,
  status,
  timeStamp,
  img,
  desc,
  name,
  designation,
}: OrderTrackCardPropsType) => {
  return (
    <>
      {status == "started" && (
        <StyledTrackOrderCardContainer>
          <StyledOrderTrackCardTitleMainWrapper>
            <StyledOrderTrackCardTitleSubWrapper>
              <Typography variant="h5">Packed</Typography>
              <Typography variant="body2">•</Typography>
              <StyledTimestampTypography variant="body1">
                {timeStamp}
              </StyledTimestampTypography>
            </StyledOrderTrackCardTitleSubWrapper>
            <Checked />
          </StyledOrderTrackCardTitleMainWrapper>
          <StyledOrderTrackDescTypography variant="body1">
            {desc}{" "}
          </StyledOrderTrackDescTypography>
          <StyledPersonInfoWrapper>
            <Image alt="person" width={50} height={50} src={`${img}`} />
            <Box>
              <Typography variant="h5">{name}</Typography>
              <Typography variant="body1">{designation}</Typography>
            </Box>
          </StyledPersonInfoWrapper>
        </StyledTrackOrderCardContainer>
      )}

      {status !== "started" && (
        <StyledNotStartedContainer>
          <Typography variant="body1">{title}</Typography>
          <NotChecked />
        </StyledNotStartedContainer>
      )}
    </>
  );
};

export default OrderTrackCard;
