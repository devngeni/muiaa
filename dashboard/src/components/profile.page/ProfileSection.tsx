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
  const token = sessionStorage.getItem("auth_token")

    function parseJwt(token) {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      return JSON.parse(jsonPayload);
    }

    const userData = parseJwt(sessionStorage.getItem("auth_token"));

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
      {selectedIndex === 1 && <ProfileDetails userData={userData} />}
      {selectedIndex === 2 && <PersonalInfo userData={userData} />}
      {selectedIndex === 3 && <AccountDetails userData={userData} />}
    </ProfilePageSectionContainer>
  );
};

export default ProfilePageSection;
