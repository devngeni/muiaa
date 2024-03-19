import DefaultLayout from '@/components/layouts/defaultLayout'
import {
  DIstroBgMask, 
  DistroBgMain,
  DistroItem,
  DistroItemsContainer,
  DistroMainContainer,
  DistroSUbContainer,
} from "@/styles/distributors-styles";
import { Typography } from '@mui/material'
import React from 'react'

function distributors() {
  return (
    <>
      <DefaultLayout>
        <DistroMainContainer>
          <DistroSUbContainer>
            <Typography
              sx={{
                width: "100%",
                textAlign: "center",
                fontSize: "36px",
                fontWeight: "700",
                color: "#fff",
              }}
            >
              Our Distributors
            </Typography>
          </DistroSUbContainer>
        </DistroMainContainer>
        <br />
        <br />
        <DistroItemsContainer container>
          <DistroItem item md={4} xs={6}>
            <DistroBgMain>
              <DIstroBgMask>+++</DIstroBgMask>
            </DistroBgMain>
          </DistroItem>
          <DistroItem item md={4} xs={6}>
            <DistroBgMain>
              <DIstroBgMask>+++</DIstroBgMask>
            </DistroBgMain>
          </DistroItem>
          <DistroItem item md={4} xs={6}>
            <DistroBgMain>
              <DIstroBgMask>+++</DIstroBgMask>
            </DistroBgMain>
          </DistroItem>
          <DistroItem item md={4} xs={6}>
            <DistroBgMain>
              <DIstroBgMask>+++</DIstroBgMask>
            </DistroBgMain>
          </DistroItem>
          <DistroItem item md={4} xs={6}>
            <DistroBgMain>
              <DIstroBgMask>+++</DIstroBgMask>
            </DistroBgMain>
          </DistroItem>
          <DistroItem item md={4} xs={6}>
            <DistroBgMain>
              <DIstroBgMask>+++</DIstroBgMask>
            </DistroBgMain>
          </DistroItem>
          <DistroItem item md={4} xs={6}>
            <DistroBgMain>
              <DIstroBgMask>+++</DIstroBgMask>
            </DistroBgMain>
          </DistroItem>
          <DistroItem item md={4} xs={6}>
            <DistroBgMain>
              <DIstroBgMask>+++</DIstroBgMask>
            </DistroBgMain>
          </DistroItem>
        </DistroItemsContainer>
      </DefaultLayout>
    </>
  );
}

export default distributors