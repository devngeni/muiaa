import React from "react";
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
  title: string;
  status: string;
  timeStamp?: string;
  img?: string;
  desc?: string;
  name?: string;
  designation?: string;
}

export interface NotificationCardPropsType {
  title: string;
  desc: string;
  img: string;
  timeStamp: string;
  isSelected: boolean;
  index: number;
  handleOnClick: (index: number) => void;
}

export interface NotificationDetailsPropsType {
  name: string;
  timeStamp: string;
  orderStatus: string;
  desc: string;
}

export interface OrderTrackSectionPropsType {
  isSectionVisible: boolean;
  handleRemoveSelectedOrder: () => void;
}
