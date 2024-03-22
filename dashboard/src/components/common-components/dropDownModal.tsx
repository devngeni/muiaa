import { TextButtons } from "@/styles/common-styles";
import { DropDownModalStyles } from "@/styles/navbar-styles";
import { Box, ClickAwayListener } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const DropDownModal = ({ handleClose }) => {
  const router = useRouter();

  const buttonStyles = {
    width: "150px",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  };

  const buttons = [
    { label: "Support", path: "" },
    { label: "Track Order", path: "/track-order/overview" },
    { label: "Favorites", path: "/favourites" },
    { label: "Cart", path: "/cart" },
  ];

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <DropDownModalStyles>
        <Box className="buttons-wrapper">
          {buttons.map((button, index) => (
            <TextButtons
              key={index}
              sx={buttonStyles}
              onClick={() => router.push(button.path)}
            >
              {button.label}
            </TextButtons>
          ))}
        </Box>
      </DropDownModalStyles>
    </ClickAwayListener>
  );
};

export default DropDownModal;
