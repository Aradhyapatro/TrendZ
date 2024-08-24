import { Grid } from "@mui/material";
import React from "react";
import Achivment from "./Achivment";
import MonthlyOverview from "./MonthlyOverview";

const AdminDashBoard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Achivment></Achivment>
        </Grid>
        <Grid item xs={12} md={8}>
          <MonthlyOverview></MonthlyOverview>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </div>
  );
};

export default AdminDashBoard;
