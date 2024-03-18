import {
  StyledOrderSearchField,
  StyledOrderSectionContainer,
  StyledOrderSectionNav,
  StyledOrderTable
} from '@/styles/overViewPageStyles';
import { OrderSectionPropsType } from '@/types/Itypes';
import { InputAdornment, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import Search from '../../../public/assets/overview/search';
import ActionArrowDown from '../../../public/assets/overview/actionArrowDown';

const mocOrderList = [
  {
    orderId: 'CR89899-23',
    recipient: 'John Avalele',
    status: 'Delivered',
    destination: 'Nyandarua, KE',
    expectedDate: '24 Jan, 2024'
  },
  {
    orderId: 'CR89899-23',
    recipient: 'John Avalele',
    status: 'Pending',
    destination: 'Nyandarua, KE',
    expectedDate: '24 Jan, 2024'
  },
  {
    orderId: 'CR89899-23',
    recipient: 'John Avalele',
    status: 'Pending',
    destination: 'Nyandarua, KE',
    expectedDate: '24 Jan, 2024'
  },
  {
    orderId: 'CR89899-23',
    recipient: 'John Avalele',
    status: 'Delivered',
    destination: 'Nyandarua, KE',
    expectedDate: '24 Jan, 2024'
  }
];

const OrderSection = ({ title, handleOnOrderSelect }: OrderSectionPropsType) => {
  const [selectedOrderId, setSelectOrderId] = useState('');
  

  return (
    <StyledOrderSectionContainer>
      <StyledOrderSectionNav>
        <h2>{title}</h2>
        <StyledOrderSearchField
          placeholder="Search order by receipt, order id, delivery etc"
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
        />
      </StyledOrderSectionNav>
      <StyledOrderTable>
        <TableHead>
          <TableRow>
            <TableCell component="th">#</TableCell>
            <TableCell component="th">Order Id</TableCell>
            <TableCell component="th">Recipient</TableCell>
            <TableCell component="th">Status</TableCell>
            <TableCell component="th">Destination</TableCell>
            <TableCell component="th">Expected Date</TableCell>
            <TableCell component="th">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mocOrderList.map((item, index) => {
            return (
              <tr key={index}>
                <TableCell component="td">{index + 1}</TableCell>
                <TableCell component="td">{item.orderId}</TableCell>
                <TableCell component="td">{item.recipient}</TableCell>
                <TableCell component="td">
                  <p className={`${item.status.toLocaleLowerCase()}`}>{item.status}</p>
                </TableCell>
                <TableCell component="td">{item.destination}</TableCell>
                <TableCell component="td">{item.expectedDate}</TableCell>
                <TableCell component="td">
                  <ActionArrowDown />
                </TableCell>
              </tr>
            );
          })}
        </TableBody>
      </StyledOrderTable>
    </StyledOrderSectionContainer>
  );
};

export default OrderSection;
