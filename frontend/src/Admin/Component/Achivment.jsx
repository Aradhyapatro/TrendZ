import { Button, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 35,
  position: "absolute",
  overflow: "hidden",
  marginLeft: "100px",
});

const Achivment = () => {
  return (
    <Card className="space-y-10" sx={{ position: "relative" }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          Shop with Aradhya
        </Typography>
        <Typography variant="body2">Congratulations</Typography>
        <Typography variant="h5">430.8k</Typography>
        <Button size="small" variant="contained">
          View Sales
        </Button>
        <TriangleImg src="" />
        <TrophyImg src="data:image/jpeg;base64,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"></TrophyImg>
      </CardContent>
    </Card>
  );
};

export default Achivment;
