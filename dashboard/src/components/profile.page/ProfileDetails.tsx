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
import { TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
import InsertImg from "../../../public/assets/overview/insertImg";

const ProfileDetails = (userData:any) => {
  const imagPickerRef = useRef<HTMLElement | null>(null);
  console.log(userData)

  return (
    <ProfileDetailsContainer>
      <ProfileItemFlexWrapper>
        <ProfileTitleTextTypo variant="h5">Profile</ProfileTitleTextTypo>
        <ProfileSubTitleTextTypo variant="body1">
          This information will be displayed when you share.
        </ProfileSubTitleTextTypo>
      </ProfileItemFlexWrapper>
      <ProfileItemFlexWrapper>
        <ProfileInputLabel>Username</ProfileInputLabel>
        <TextField
          placeholder={userData.userData.name}
          value={userData.userData.name}
        />
      </ProfileItemFlexWrapper>
      <ProfileItemFlexWrapper>
        <ProfileInputLabel>Photo</ProfileInputLabel>
        <ProfileDetailsFlexRow>
          <Image
            src={`${userData.userData.picture}`}
            alt="avatar"
            width={48}
            height={48}
          />
        </ProfileDetailsFlexRow>
      </ProfileItemFlexWrapper>

      {/* <ProfileItemFlexWrapper>
        <ProfileInputLabel>Cover Photo</ProfileInputLabel>
        <CoverPhotoWrapper>
          <InsertImg />
          <Typography variant="h6">
            Upload a file <span>or drag and drop</span>
          </Typography>
          <Typography variant="body1">PNG, JPG, GIF up to 10MB</Typography>
        </CoverPhotoWrapper>
      </ProfileItemFlexWrapper> */}
      <ProfileUpdateBtn>Save</ProfileUpdateBtn>
    </ProfileDetailsContainer>
  );
};

export default ProfileDetails;
