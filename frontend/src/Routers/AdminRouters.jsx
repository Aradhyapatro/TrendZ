import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "../Customer/Components/Navigation/Nav";
import Admin from "../Admin/Admin";
import Footer from "../Customer/Components/Footer/Footer";

const AdminRouters = () => {
  return (
    <div>
      {/* <div>
        <Nav></Nav>
      </div> */}

      <Routes>
        <Route path="/*" element={<Admin />}></Route>
      </Routes>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AdminRouters;
