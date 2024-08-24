import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid spacing={2} gap={3}>
        <Grid item={1} xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fc" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item={1} xs={9}>
          <div className="space-y-2">
            <div>
              <p className="text-lg font-semibold">Ram</p>
              <p className="opacity-70">July 23,2024</p>
            </div>
          </div>
          <Rating
            value={3.5}
            name="half-rating"
            readOnly
            precision={0.5}
          ></Rating>
          <p>nice product,i loved the dress</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
