import { Box, Button, InputLabel, styled, Typography } from "@mui/material";

export const ProfileDetailsContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
}));

export const ProfileItemFlexWrapper = styled(Box)(() => ({
  width: "590px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  input: {
    color: "var(--gray-700, #374151)",
    fontFamily: "Inter",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
  },
  "@media screen and (max-width:850px)": {
    width: "100%",
  },
}));

export const ProfilePhotoCngBtn = styled(Button)(() => ({
  height: "35px",
  padding: "9px 13px",
  borderRadius: "6px",
  border: "1px solid var(--gray-300, #D1D5DB)",
  background: "var(--white, #FFF)",
  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
  color: "var(--gray-700, #374151)",
  fontFamily: "Inter",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "500",
}));

export const ProfileDetailsFlexRow = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  alignItems: "center",
  img: {
    borderRadius: "50%",
  },
}));

export const CoverPhotoWrapper = styled(Box)(() => ({
  width: "100%",
  height: "140px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  borderRadius: "6px",
  border: "2px dashed var(--gray-300, #D1D5DB)",
  cursor: "pointer",
  h6: {
    color: "var(--indigo-600, #4F46E5)",
    fontFamily: "Inter",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
  },
  span: {
    color: "var(--gray-600, #4B5563)",
  },
  p: {
    color: "var(--gray-500, #6B7280)",
    fontFamily: "Inter",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "16px",
  },
}));

export const ProfileUpdateBtn = styled(Button)(() => ({
  width: "183px",
  height: "46px",
  padding: "9px 17px",
  borderRadius: "6px",
  background: "#003565",
  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
  color: "var(--white, #FFF)",
  fontFamily: "Inter",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "20px",
  ":hover": {
    background: "#003465d5",
  },
}));

export const ProfileInputLabel = styled(InputLabel)(() => ({
  color: "var(--gray-700, #374151)",
  fontFamily: "Inter",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "20px",
}));

export const ProfileTitleTextTypo = styled(Typography)(() => ({
  color: "var(--gray-900, #111827)",
  fontFamily: "Inter",
  fontSize: "1.125rem",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "24px",
}));

export const ProfileSubTitleTextTypo = styled(Typography)(() => ({
  color: "var(--gray-500, #6B7280)",
  fontFamily: "Inter",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
}));
