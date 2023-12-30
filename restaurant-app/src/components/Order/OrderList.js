import React, { useEffect, useState } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../../api";
import Table from "../../layouts/Table";
import { TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";

export default function OrderList(props) {
  const { setOrderId, setOrderListVisibility, resetFormControls, setNotify } =
    props;
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.ORDER)
      .fetchAll()
      .then((res) => {
        setOrderList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const showForUpdate = (id) => {
    setOrderId(id);
    setOrderListVisibility(false);
  };

  const deleteOrder = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      createAPIEndpoint(ENDPOINTS.ORDER)
        .delete(id)
        .then((res) => {
          setOrderListVisibility(false);
          setOrderId(0);
          resetFormControls();
          setNotify({ isOpen: true, message: "Deleted Succesfully" });
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order No.</TableCell>
          <TableCell>Customer</TableCell>
          <TableCell>Paid With</TableCell>
          <TableCell>Grand Total</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orderList.map((item) => (
          <TableRow key={item.orderMasterId}>
            <TableCell onClick={(e) => showForUpdate(item.orderMasterId)}>
              {item.orderNumber}
            </TableCell>
            <TableCell onClick={(e) => showForUpdate(item.orderMasterId)}>
              {item.customer.customerName}
            </TableCell>
            <TableCell onClick={(e) => showForUpdate(item.orderMasterId)}>
              {item.pMethod}
            </TableCell>
            <TableCell onClick={(e) => showForUpdate(item.orderMasterId)}>
              {item.gTotal}
            </TableCell>
            <TableCell onClick={(e) => showForUpdate(item.orderMasterId)}>
              <DeleteOutlineTwoToneIcon
                color="secondary"
                onClick={(e) => deleteOrder(item.orderMasterId)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
