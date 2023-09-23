import React from "react";
import Form from "../../layouts/Form";
import { Grid, Button as MuiButton } from "@material-ui/core";
import { Input, Select, Button } from "../../controls";

const pMethods = [
  { id: "none", title: "Select" },
  { id: "Cash", title: "Cash" },
  { id: "Card", title: "Card" },
];

export default function OrderForm(props) {
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls,
  } = props;
  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Input
            disabled
            label="Order Number"
            name="orderNumber"
            value={values.orderNumber}
          />
          <Select
            label="Customer"
            name="customerId"
            onChange={handleInputChange}
            options={[
              { id: 0, title: "Select" },
              { id: 1, title: "Customer 1" },
              { id: 2, title: "Customer 2" },
              { id: 3, title: "Customer 3" },
              { id: 4, title: "Customer 4" },
            ]}
            value={values.customerId}
          />
        </Grid>
        <Grid item xs={6}>
          <Select
            label="Payment Method"
            name="pMethod"
            value={values.pMethod}
            options={pMethods}
            onChange={handleInputChange}
          />

          <Input
            disabled
            label="Grand Total"
            name="gTotal"
            value={values.gTotal}
          />
        </Grid>
      </Grid>
    </Form>
  );
}
