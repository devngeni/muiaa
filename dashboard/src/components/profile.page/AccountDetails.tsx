import {
  ProfileDetailsContainer,
  ProfileInputLabel,
  ProfileItemFlexWrapper,
  ProfileSubTitleTextTypo,
  ProfileTitleTextTypo,
  ProfileUpdateBtn,
} from "@/styles/profilePageStyles";
import { TextField } from "@mui/material";
import React from "react";

const AccountDetails = () => {
  return (
    <ProfileDetailsContainer>
      <ProfileItemFlexWrapper>
        <ProfileTitleTextTypo variant="h5">
          Setup your account information
        </ProfileTitleTextTypo>
        <ProfileSubTitleTextTypo variant="body1">
          Create secure passwords
        </ProfileSubTitleTextTypo>
      </ProfileItemFlexWrapper>
      <ProfileItemFlexWrapper>
        <ProfileInputLabel>Old Password</ProfileInputLabel>
        <TextField type="password" placeholder="Enter your old password" />
      </ProfileItemFlexWrapper>
      <ProfileItemFlexWrapper>
        <ProfileInputLabel>New Password</ProfileInputLabel>
        <TextField type="password" placeholder="Enter new password" />
        <ProfileInputLabel>Confirm Password</ProfileInputLabel>
        <TextField type="password" placeholder="Enter new password" />
      </ProfileItemFlexWrapper>
      <ProfileUpdateBtn>Save</ProfileUpdateBtn>
    </ProfileDetailsContainer>
  );
};

export default AccountDetails;
