import {
  BgHeroContainer,
  BgHeroMask,
  BgHeroTitle,
  ButtonContainer,
  HeroMiniText,
  GrayButton,
  OrangeButton,
} from "@/styles/bghero-styled";
import { Box } from "@mui/material";
import React from "react";

function BgHeroComponent() {
  return (
    <BgHeroContainer>
      <BgHeroMask>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            zIndex: "100",
            width: "100%",
            padding: "20px",
          }}
        >
          <BgHeroTitle>Introducing DairyBoost 5000</BgHeroTitle>
          <HeroMiniText>
            A premium feed blend, enriched with essential nutrients, designed to
            maximize milk output while ensuring robust cow health.
          </HeroMiniText>

          <br />
          <ButtonContainer>
            <OrangeButton>Checkout</OrangeButton>
            <GrayButton>View Distributor</GrayButton>
          </ButtonContainer>
        </Box>
      </BgHeroMask>
    </BgHeroContainer>
  );
}

export default BgHeroComponent;
