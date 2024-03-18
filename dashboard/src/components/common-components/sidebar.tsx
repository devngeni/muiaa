import React, { useState } from "react";
import Wallet from "../../../public/assets/wallet";
import Person from "../../../public/assets/person";
import Notification from "../../../public/assets/notification";
import Vehicle from "../../../public/assets/Vehicle";
import Order from "../../../public/assets/order";
import Location from "../../../public/assets/location";
import Dashboard from "../../../public/assets/dashboard";
import Link from "next/link";
import { StyledArrowToggleStyle, StyledSidebarChildContainer, StyledSidebarContainer, StyledSidebarItemWrapper } from "@/styles/SideBarStyles";
import ArrowRight from "../../../public/assets/arrowRight";
import ArrowLeft from "../../../public/assets/arrowLeft";
import { useRouter } from "next/router";

const menuItem = [
  {
    title:"Overview",
    icon:<Dashboard/>,
    url:"overview"
  },
  {
    title:"My Orders",
    icon:<Order/>,
    url:"my-orders"
  },
  {
    title:"Track My Orders",
    icon:<Location/>,
    url:"track-my-orders"
  },
  {
    title:"Drivers",
    icon:<Vehicle/>,
    url:"drivers"
  },
  {
    title:"Notification",
    icon:<Notification/>,
    url:"notification"
  },
  {
    title:"My Account",
    icon:<Person/>,
    url:"my-account"
  },
  {
    title:"Wallet",
    icon:<Wallet/>,
    url:"wallet"
  },
]


const Sidebar = () => {
  const router = useRouter();
  const [showIconsOnly, setShowIconsOnly] = useState(false);

  const handleToggleIcons = () => {
    setShowIconsOnly(!showIconsOnly);
  };


  return <StyledSidebarContainer>
    <StyledSidebarChildContainer>
    {
      menuItem.map((item, index)=>{
        return  <Link href={`${item.url}`} key={index}>
          <StyledSidebarItemWrapper isActive={router.pathname.includes(item.url)}>
          {showIconsOnly ? item.icon : (
                <>
                  {item.icon}
                  {item.title}
                </>
              )}
          </StyledSidebarItemWrapper>
          </Link>
      })
    }
    
    <StyledArrowToggleStyle onClick={handleToggleIcons}>
          {showIconsOnly ? <ArrowRight/>: <ArrowLeft/>} 
        </StyledArrowToggleStyle>

    </StyledSidebarChildContainer>
  </StyledSidebarContainer>;
};

export default Sidebar;
