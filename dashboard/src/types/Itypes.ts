import React from 'react';
export interface OverViewCardPropsType {
  value: string;
  title: string;
  icon: React.ReactNode;
}

export interface OrderSectionPropsType {
  title: string;
  handleOnOrderSelect: (orderId: string) => void;
}


export interface OrderTrackCardPropsType {

  title:string
  status:string,
  timeStamp?:string
  img?:string
  desc?:string
  name?:string,
  designation?:string
};