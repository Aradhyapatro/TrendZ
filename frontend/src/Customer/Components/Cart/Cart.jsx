import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetCart } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);

  useEffect(() => {
    dispatch(GetCart());
    console.log("cart", { ...cart });
  }, [cart.updateCartItem, cart.deleteCartItem]);

  const handleCheckOut = () => {
    navigate("/checkout?step=2");
  };

  return (
    <div className="mt-5">
      <div className="lg:grid grid-cols-3 lg:px-6 relative">
        <div className="col-span-2">
          {cart.cart?.cartitem.map((item, index) => (
            <div key={index}>
              <CartItem item={item} />
            </div>
          ))}
        </div>
        <div className="px-5 sticky top-0 mt-5 lg:mt-0 h-[100vh]">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold text-black">
              <div className="flex justify-between p-4 ">
                <span>Price</span>
                <span className="text-green-600">₹{cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between p-4">
                <span>Discount</span>
                <span className="text-green-600">- ₹{cart.cart?.discount}</span>
              </div>
              <div className="flex justify-between p-4 ">
                <span>Delivery</span>
                <span className="text-green-600">₹0</span>
              </div>
              <div className="flex justify-between p-4">
                <span>Total Amount</span>
                <span className="text-green-600">
                  ₹{cart.cart?.totalDiscountPrice}
                </span>
              </div>
            </div>
            <Button
              onClick={() => {
                handleCheckOut();
              }}
              variant="contained"
              className="w-full"
              sx={{ bgcolor: "#9155fc" }}
            >
              check out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
