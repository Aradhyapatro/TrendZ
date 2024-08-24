import React from "react";
import Nav from "../Customer/Components/Navigation/Nav";
import Footer from "../Customer/Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Customer/Pages/HomePage";
import Cart from "../Customer/Components/Cart/Cart";
import Product from "../Customer/Components/Product/Product";
import ProductDetail from "../Customer/Components/ProductDetails/ProductDetail";
import CheckOut from "../Customer/Components/Checkout/CheckOut";
import Order from "../Customer/Components/Order/Order";
import OrderDetails from "../Customer/Components/Order/OrderDetails";
import PaymentSuccess from "../Customer/Components/Payment/PaymentSuccess";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>

      <Routes>
        <Route path="/Login" element={<HomePage />}></Route>
        <Route path="/Register" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:LevelTwo/:levelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productid" element={<ProductDetail />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/Account/order" element={<Order></Order>}></Route>
        <Route
          path="/Account/order/:orderid"
          element={<OrderDetails />}
        ></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
      </Routes>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default CustomerRouters;
