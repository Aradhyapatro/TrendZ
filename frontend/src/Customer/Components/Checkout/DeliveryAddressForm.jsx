import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";
import { CREATE_ORDER_SUCCESS } from "../../../State/Order/ActionType";

const DeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hanleSubmit = async (e) => {
    e.preventDefault();
    console.log("Address");
    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("First Name"),
      lastName: data.get("Last Name"),
      street: data.get("Address"),
      city: data.get("City"),
      state: data.get("State"),
      zipcode: data.get("ZIP"),
      mobile: data.get("Phone Number"),
    };

    const orderData = {
      address: address,
    };
    console.log(orderData);

    try {
      const resultAction = await dispatch(createOrder(orderData));
      // console.log(resultAction);

      if (resultAction.type === CREATE_ORDER_SUCCESS) {
        window.location.href = `/checkout?step=3&order_id=${resultAction.payload.id}`;
        // navigate(`/checkout?step=3&order_id=${resultAction.payload.id}`);
        // navigate({ search: `?step=3&order_id=${resultAction.payload.id}` });
      }
    } catch (error) {
      console.error("Failed to create order", error);
    }
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard></AddressCard>
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145,85,253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form
              onSubmit={(e) => {
                hanleSubmit(e);
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="First Name"
                    name="First Name"
                    label="First Name"
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Last Name"
                    name="Last Name"
                    label="Last Name"
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <TextField
                    multiline
                    rows={4}
                    required
                    fullWidth
                    id="Address"
                    name="Address"
                    label="Address"
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="City"
                    name="City"
                    label="City"
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="State"
                    name="State"
                    label="State/Province/Region"
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="ZIP"
                    name="ZIP"
                    label="ZIP"
                    autoComplete="shipping postal-code"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Phone Number"
                    name="Phone Number"
                    label="Phone Number"
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ py: 1.5, my: 2, bgcolor: "RGB(145,85,254 )" }}
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
