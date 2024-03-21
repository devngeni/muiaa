import {
  ProfileInfoContainer,
  ProfilePageSectionContainer,
  ProfileStatusWrapper,
  ProfileTilesContainer,
  ProfileTilesFlexWrapper,
  ProfileTitleBoxWrapper,
} from "@/styles/profilePageStyles";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import CheckedMark from "../../../public/assets/overview/checkedMark";
import ArrowRight from "../../../public/assets/overview/arrowRight";
import ProfileDetails from "./ProfileDetails";
import PersonalInfo from "./PersonalInfo";
import AccountDetails from "./AccountDetails";

const ProfilePageSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <ProfilePageSectionContainer>
      <ProfileTilesContainer>
        <ProfileTilesFlexWrapper
          onClick={() => setSelectedIndex(1)}
          isSelected={selectedIndex === 1}
        >
          <ProfileTitleBoxWrapper>
            <Typography variant="h5">Profile</Typography>
            <ProfileStatusWrapper>
              <CheckedMark />
              <Typography variant="body1">Complete</Typography>
            </ProfileStatusWrapper>
          </ProfileTitleBoxWrapper>
          <ArrowRight />
        </ProfileTilesFlexWrapper>
        <ProfileTilesFlexWrapper
          onClick={() => setSelectedIndex(2)}
          isSelected={selectedIndex === 2}
        >
          <ProfileTitleBoxWrapper>
            <Typography variant="h5">Personal Information</Typography>
            <ProfileStatusWrapper>
              {/* <CheckedMark /> */}
              <Typography>Pending</Typography>
            </ProfileStatusWrapper>
          </ProfileTitleBoxWrapper>
          <ArrowRight />
        </ProfileTilesFlexWrapper>
        <ProfileTilesFlexWrapper
          onClick={() => setSelectedIndex(3)}
          isSelected={selectedIndex === 3}
        >
          <ProfileTitleBoxWrapper>
            <Typography variant="h5">Account</Typography>
            <ProfileStatusWrapper>
              {/* <CheckedMark /> */}
              <Typography>Pending</Typography>
            </ProfileStatusWrapper>
          </ProfileTitleBoxWrapper>
          <ArrowRight />
        </ProfileTilesFlexWrapper>
      </ProfileTilesContainer>
      {selectedIndex === 1 && <ProfileDetails />}
      {selectedIndex === 2 && <PersonalInfo />}
      {selectedIndex === 3 && <AccountDetails />}
    </ProfilePageSectionContainer>
  );
};

export default ProfilePageSection;
