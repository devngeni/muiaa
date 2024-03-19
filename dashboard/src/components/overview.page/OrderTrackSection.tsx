import { OrderTrackSectionContainer, ProgressMapBtnStyle, StyledOrderActionWrapper, StyledOrderTypoGraphy } from '@/styles/overViewPageStyles';
import React from 'react';
import {OrderTrackCard} from './';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const orderTrackSectionMock =[
    {
        title:"Delivered",
        status:"not-started",
        startTime:"",
        img:"",
        desc:"",
        inCharge:{
            name:"",
            designation:""
        }
    },
    {
        title:"Shipped",
        status:"not-started",
        startTime:"",
        img:"",
        desc:"",
        inCharge:{
            name:"",
            designation:""
        }

    },
    {
        title:"Packed",
        status:"started",
        timeStamp:"3 hrs ago",
        desc:"Your package has been packed and is ready for tracing. Dispactch will begin any moment from now. Be sure to look it out. ",
        img:"/assets/overview/person.jpg",
        inCharge:{
            name:"Adelide Suriana",
            designation:"Driver"
        }

    },
    {
        title:"Order Confirmed",
        status:"started",
        timeStamp:"3 hrs ago",
        desc:"Your order has been attended to,quality assesed and is ready to be packed for transit.",
        img:"/assets/overview/person.jpg",
        inCharge:{
            name:"Mina Babatunde",
            designation:"Logistics manager"
        }

    },
];



const OrderTrackSection=()=> {
  return (
    <OrderTrackSectionContainer>
        <StyledOrderTypoGraphy variant='h5'>CR89899-23</StyledOrderTypoGraphy>
        {
            orderTrackSectionMock.map((item, index)=>{
                const {title, status, timeStamp, img, desc, inCharge} = item;
                return (
                    <OrderTrackCard title={title} status={status} timeStamp={timeStamp} img={img} desc={desc} name={inCharge.name} designation={inCharge.designation}  key={index}/>
                )
            })
        }
    <StyledOrderActionWrapper>
      <Link href={"#"}>Report a problem</Link>
      <Link href={"#"}>Mark as received</Link>
    </StyledOrderActionWrapper>
    <ProgressMapBtnStyle>Progress Map</ProgressMapBtnStyle>
    </OrderTrackSectionContainer>
  )
}

export default OrderTrackSection;