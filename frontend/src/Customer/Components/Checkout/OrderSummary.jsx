import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation, useParams } from "react-router-dom";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { Order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("order_id");

  useEffect(() => {
    if (id) {
      dispatch(getOrderById(id));
    }
  }, [id]);

  const handleCheckOut = () => {
    dispatch(createPayment(id));
  };

  if (!Order.Order) {
    return <div>Loading...</div>; // added a loading state
  }
  console.log(Order.Order);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-5-md border">
        <AddressCard address={Order.Order.shippingAddress}></AddressCard>
      </div>
      <div className="mt-5">
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {Order.Order.orderItem ? (
              Order.Order.orderItem.map((item, index) => (
                <div key={index}>
                  <CartItem item={item} />
                </div>
              ))
            ) : (
              <div>No items in order</div>
            )}
          </div>
          <div className="px-5 sticky top-0 mt-5 lg:mt-0 h-[100vh]">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold text-black">
                <div className="flex justify-between p-4 ">
                  <span>Price</span>
                  <span className="text-green-600">
                    ₹{Order.Order?.totalPrice}
                  </span>
                </div>
                <div className="flex justify-between p-4">
                  <span>Discount</span>
                  <span className="text-green-600">
                    ₹
                    {Order.Order?.totalPrice -
                      Order.Order?.totalDiscountedPrice}
                  </span>
                </div>
                <div className="flex justify-between p-4 ">
                  <span>Delivery</span>
                  <span className="text-green-600">₹0</span>
                </div>
                <div className="flex justify-between p-4">
                  <span>Total Amount</span>
                  <span className="text-green-600">
                    ₹{Order.Order?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                variant="contained"
                className="w-full"
                sx={{ bgcolor: "#9155fc" }}
                onClick={handleCheckOut}
              >
                check out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
