import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  deleteProduct,
  findAllProducts,
  findProducts,
} from "../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";

const ProductsTable = () => {
  const rows = [1, 1, 1];
  const { product } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleProductDelete = async (id) => {
    await dispatch(deleteProduct(id));
    dispatch(findAllProducts());
  };

  useEffect(() => {
    const data = {
      category: "women_dress",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 4000000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 1,
      pageSize: 1,
      stock: "",
    };

    dispatch(findAllProducts());
  }, []);
  return (
    <div className="p-5 ">
      <Card className="mt-2">
        <CardHeader title="All Products"></CardHeader>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Category&nbsp;</TableCell>
                <TableCell align="left">Price&nbsp;</TableCell>
                <TableCell align="left">Quantity&nbsp;</TableCell>
                <TableCell align="left">Delete&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product?.products?.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Avatar src={row.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell align="left" scope="row">
                    {row.id}-{row.title}
                  </TableCell>
                  <TableCell align="left">{row.category.name}</TableCell>
                  <TableCell align="left">{row.price}</TableCell>
                  <TableCell align="left">{row.quantity}</TableCell>
                  <TableCell align="left">
                    <Button
                      variant="outlined"
                      onClick={() => {
                        handleProductDelete(row.id);
                      }}
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

export default ProductsTable;
