import React from "react";

const AddressCard = ({ address }) => {
  // console.log("Address", address);

  if (!address) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">
          {address.firstName} {address.lastName}
        </p>
        <p>
          {address.city},{address.street},{address.zipcode}
        </p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{address.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
