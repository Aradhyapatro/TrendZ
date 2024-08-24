import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/product/${item.id}`);
      }}
      className="productCard w-[15rem] m-3 transition-all cursor-pointer"
    >
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={item.imageUrl}
          alt="image"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{item.brand}</p>
          <p>{item.title}</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <p className="semibold">₹{item.discountedPrice}</p>
          <p className="line-through opacity-50">{item.price}</p>
          <p className="text-green-600 ">{item.discountPresent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
