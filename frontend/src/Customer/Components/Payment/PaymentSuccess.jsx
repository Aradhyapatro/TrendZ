import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { updatePayment } from "../../../State/Payment/Action";
import { getOrderById } from "../../../State/Order/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../Order/OrderTracker";
import AddressCard from "../AddressCard/AddressCard";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [referenceId, setReferenceId] = useState(null);
  const { orderId } = useParams();

  const dispatch = useDispatch();
  const { Order } = useSelector((store) => store);
  console.log(Order.Order, "here");

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    console.log(urlParam.get("razorpay_payment_id"));

    setPaymentId(urlParam.get("razorpay_payment_id"));
    setPaymentStatus(urlParam.get("razorpay_payment_link_status"));

    const data = { orderId, paymentId: urlParam.get("razorpay_payment_id") };

    dispatch(updatePayment(data));
    dispatch(getOrderById(orderId));
    console.log({ ...Order }, " this page");
  }, [orderId, paymentId]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Congratulation</AlertTitle>
          your Order is placed
        </Alert>

        <OrderTracker activeStep={1} />

        <Grid container className="space-y-5 py-5-pt-20">
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 space-y-8"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            {Order?.Order?.orderItem.map((item, index) => (
              <React.Fragment key={index}>
                <Grid item xs={6}>
                  <div className="flex items-center">
                    <img
                      className="w-[5rem] h-[5rem] object-cover object-top"
                      src={
                        item.product.imageUrl ||
                        "https://rukminim1.flixcart.com/image/612/612/kzegk280/dress/a/1/2/l-ttj6006608-tokyo-talkies-original-imagbfyrhdraabse.jpeg?q=70"
                      }
                      alt={item.title || "Product Image"}
                    />
                    <div className="ml-4">
                      {" "}
                      {/* Added margin-left for spacing */}
                      <p>{item.product.title || "Product Title"}</p>
                      <div className="opacity-50 text-xs font-semibold space-x-5 p-2">
                        <span>
                          Color: {item.product.color || "Product Color"}
                        </span>
                        <span>Size: {item.size || "Product Size"}</span>
                      </div>
                      <p>Seller: {item.product.brand || "Unknown Seller"}</p>
                      <p>₹ {item.discountedPrice || "0"}</p>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <AddressCard address={Order?.Order?.shippingAddress} />{" "}
                  {/* Use self-closing tag for components */}
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PaymentSuccess;
