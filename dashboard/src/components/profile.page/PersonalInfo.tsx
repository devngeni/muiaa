import {
  CoverPhotoWrapper,
  ProfileDetailsContainer,
  ProfileDetailsFlexRow,
  ProfileInputLabel,
  ProfileItemFlexWrapper,
  ProfilePhotoCngBtn,
  ProfileSubTitleTextTypo,
  ProfileTitleTextTypo,
  ProfileUpdateBtn,
} from "@/styles/profilePageStyles";
import { MenuItem, Select, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import InsertImg from "../../../public/assets/overview/insertImg";

const PersonalInfo = (userData: any) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  console.log(userData)

  return (
    <ProfileDetailsContainer>
      <ProfileItemFlexWrapper>
        <ProfileTitleTextTypo variant="h5">
          Personal Information
        </ProfileTitleTextTypo>
        <ProfileSubTitleTextTypo variant="body1">
          Use a permanent address where you can receive mail.
        </ProfileSubTitleTextTypo>
      </ProfileItemFlexWrapper>
      <ProfileItemFlexWrapper>
        <ProfileInputLabel>First Name</ProfileInputLabel>
        <TextField
          placeholder="Enter your first name"
          value={userData.userData.given_name}
        />
      </ProfileItemFlexWrapper>
      <ProfileItemFlexWrapper>
        <ProfileInputLabel>Last Name</ProfileInputLabel>
        <TextField
          placeholder="Enter your first name"
          value={userData.userData.family_name}
        />
      </ProfileItemFlexWrapper>
      <ProfileItemFlexWrapper>
        <ProfileInputLabel>Country / Region</ProfileInputLabel>
        <Select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          inputProps={{ "aria-label": "Without label" }}
          displayEmpty
        >
          <MenuItem disabled value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value={"Kenya"}>Kenya</MenuItem>
          <MenuItem value={"Tanzania"}>Tanzania</MenuItem>
        </Select>
      </ProfileItemFlexWrapper>
      <ProfileItemFlexWrapper>
        <ProfileInputLabel>Street Address</ProfileInputLabel>
        <TextField placeholder="Enter your street address" />
      </ProfileItemFlexWrapper>
      <ProfileItemFlexWrapper>
        <ProfileInputLabel>City</ProfileInputLabel>
        <TextField placeholder="Enter your city" />
      </ProfileItemFlexWrapper>
      <ProfileUpdateBtn>Save</ProfileUpdateBtn>
    </ProfileDetailsContainer>
  );
};

export default PersonalInfo;
