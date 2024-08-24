import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../State/Admin/Order/Action";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const OrderTable = () => {
  const { AdminOrder } = useSelector((store) => store);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const handleClick = (event, id) => {
    setAnchorEl({ [id]: event.currentTarget });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShippedOrder = (id) => {
    dispatch(shipOrder(id));
    handleClose();
  };

  const handleDeliverOrder = (id) => {
    dispatch(deliveredOrder(id));
    handleClose();
  };

  const confirmedOrder = (id) => {
    dispatch(confirmOrder(id));
    handleClose();
  };

  const handleOrderDelete = async (id) => {
    // Implement delete functionality here
    await dispatch(deleteOrder(id));
    dispatch(getOrders());
  };

  useEffect(() => {
    dispatch(getOrders());
  }, [
    AdminOrder.ship,
    AdminOrder.delivered,
    AdminOrder.cancel,
    AdminOrder.confirm,
  ]);

  return (
    <div className="p-10">
      <Card className="mt-2">
        <CardHeader title="All Orders" />
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Images</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Total Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {AdminOrder?.orders?.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <AvatarGroup max={3}>
                      {row.orderItem.map((orderItem) => (
                        <Avatar
                          key={orderItem.product.id}
                          src={orderItem.product.imageUrl}
                        />
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left" scope="row">
                    {row.orderItem.map((orderItem) => (
                      <div key={orderItem.product.id}>
                        {orderItem.product.title}
                        <br />
                      </div>
                    ))}
                  </TableCell>
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">{row.totalPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-white px-5 py-2 rounded ${
                        row.orderStatus === "CONFIRMED"
                          ? "bg-green-500"
                          : row.orderStatus === "SHIPPED"
                          ? "bg-blue-500"
                          : row.orderStatus === "PLACED"
                          ? "bg-orange-500"
                          : row.orderStatus === "PENDING"
                          ? "bg-gray-500"
                          : "bg-red-500"
                      }`}
                    >
                      {row.orderStatus}
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      variant="outlined"
                      onClick={(e) => handleClick(e, row.id)}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`menu-${row.id}`}
                      anchorEl={anchorEl?.[row.id] || null}
                      open={Boolean(anchorEl?.[row.id])}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={() => confirmedOrder(row.id)}>
                        Confirm Order
                      </MenuItem>
                      <MenuItem onClick={() => handleShippedOrder(row.id)}>
                        Ship Order
                      </MenuItem>
                      <MenuItem onClick={() => handleDeliverOrder(row.id)}>
                        Deliver Order
                      </MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      variant="outlined"
                      onClick={() => handleOrderDelete(row.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrderTable;
