import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { BgOverlay, WorksMainHero } from '@/StyledComponents/Works';
import { Box } from '@mui/material';
import React from 'react'

function HotItWorks() {
  return (
    <>
    <Navbar />
    <WorksMainHero>
      <BgOverlay >
        <Box sx={{textAlign:"center", width:"100%"}}>
          <h1>How It Works</h1>
        </Box>
      </BgOverlay>
    </WorksMainHero>
    <Footer />
    </>
  )
}

export default HotItWorks;