import { Box, styled } from "@mui/material";

export const ProfilePageSectionContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  padding: "75px",
  gap: "50px",
  "@media screen and (max-width:768px)": {
    flexDirection: "column",
  },
}));

export const ProfileTilesContainer = styled(Box)(() => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  "@media screen and (max-width:768px)": {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const ProfileTilesFlexWrapper = styled(Box)(
  ({ isSelected }: { isSelected: boolean }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
    background: `${isSelected ? "#EEEEEE" : "#fff"}`,
    ":hover": {
      background: "#EEEEEE",
    },
    h5: {
      color: `${isSelected ? "var(--gray-900, #111827)" : "#6D6D6D"}`,
      fontFamily: "Inter",
      fontSize: "1.125rem",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "20px",
    },
    p: {
      color: "var(--gray-500, #6B7280)",
      fontFamily: "Inter",
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "1.25rem",
    },
  })
);

export const ProfileStatusWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
}));

export const ProfileTitleBoxWrapper = styled(Box)(() => ({
  width: "100%",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

export const ProfileInfoContainer = styled(Box)(() => ({
  width: "100%",
}));
