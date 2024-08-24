import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreateProduct from "./Component/CreateProduct";
import ProductsTable from "./Component/ProductsTable";
import OrderTable from "./Component/OrderTable";
import CustomersTable from "./Component/CustomersTable";
import AdminDashBoard from "./Component/AdminDashBoard";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <InboxIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <EmailIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <InboxIcon /> },
  { name: "Add Products", path: "/admin/product/create", icon: <EmailIcon /> },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh", // corrected here
      }}
    >
      {isLargeScreen && <Toolbar />}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => {
              navigate(item.path);
            }}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/admin/account"); // added a path for account
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <div>
        <div className="flex h-full relative">
          <CssBaseline />

          <div className="w-[15%] sticky top-0 right-[85%]">{drawer}</div>
          <div className="w-[85%] h-full">
            <Routes>
              <Route path="/" element={<AdminDashBoard />} />
              <Route path="/product/create" element={<CreateProduct />} />
              <Route path="/products" element={<ProductsTable />} />
              <Route path="/orders" element={<OrderTable />} />
              <Route path="/customers" element={<CustomersTable />} />
              <Route path="/account" element={<div>Account Page</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
