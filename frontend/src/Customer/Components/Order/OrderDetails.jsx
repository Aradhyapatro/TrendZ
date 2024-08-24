import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20 m-3 space-y-10">
      <div className="bg-white rounded shadow-md px-10 py-7 border w-fit m-auto">
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard></AddressCard>
      </div>
      <div>
        <OrderTracker></OrderTracker>
      </div>
      {[1, 1, 1, 1].map(() => {
        return (
          <>
            <Grid className="space-y-2" container>
              <Grid
                item
                container
                className="shadow-lg rounded-md p-5 border"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
              >
                <Grid item xs={6}>
                  <div className="flex items-center space-x-5">
                    <img
                      alt=""
                      className="object-cover object-top w-[5rem] h-[5rem]"
                      src="data:image/jpeg;base64,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"
                    />
                    <div space-y-2 ml-5>
                      <p className="font-semibold">Women Bodycon marun top</p>
                      <p className="space-x-5 opacity-50 text-xs">
                        <span>Color: pink</span> <span>Size:M</span>
                      </p>
                      <p>Seller: linara</p>
                      <p>₹2300</p>
                    </div>
                  </div>
                </Grid>
                <Grid item>
                  <Box sx={{ color: deepPurple[500] }}>
                    <StarBorderIcon sx={{ fontSize: "2rem" }}></StarBorderIcon>
                    <span>Rate & Review Product</span>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </>
        );
      })}
    </div>
  );
};

export default OrderDetails;
