import { TrendingUp } from "@mui/icons-material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  Avatar,
  Grid,
  Typography,
  Box,
  CardHeader,
  IconButton,
  CardContent,
  Card,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const salesData = [
  {
    stats: "245k",
    title: "Sales",
    color: "blue",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "12.5k",
    title: "Customers",
    color: "green",
    icon: <AccountCircleIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "1.54k",
    title: "Products",
    color: "red",
    icon: <SettingsCellIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "88k",
    title: "Revenue",
    color: "yellow",
    icon: <CurrencyRupeeIcon sx={{ fontSize: "1.75rem" }} />,
  },
];

const renderStats = () => {
  return (
    <>
      {salesData.map((item, index) => (
        <Grid item xs={12} sm={3} key={index}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              variant="rounded"
              sx={{
                mr: 1,
                width: 44,
                height: 44,
                boxShadow: 3,
                color: "white",
                backgroundColor: `${item.color}`,
              }}
            >
              {item.icon}
            </Avatar>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: 2,
              }}
            >
              <Typography variant="caption">{item.title}</Typography>
              <Typography variant="h6">{item.stats}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </>
  );
};

const MonthlyOverview = () => {
  return (
    <Card className="p-3 ">
      <Grid container spacing={2}>
        <CardHeader
          title="Monthly Overview"
          action={
            <IconButton sx={{ ml: 25 }}>
              <MoreVertIcon />
            </IconButton>
          }
          subheader={
            <Typography variant="body2">
              <Box
                component="span"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                Total 48.5% growth
              </Box>
              this month
            </Typography>
          }
          titleTypographyProps={{
            sx: {
              m: 2.5,
              lineHeight: "2rem !important",
              letterSpacing: "0.15px !important",
            },
          }}
        />
        <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
          <Grid container spacing={[5, 0]}>
            {renderStats()}
          </Grid>
        </CardContent>
      </Grid>
    </Card>
  );
};

export default MonthlyOverview;
