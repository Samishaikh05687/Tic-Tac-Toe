import React from "react";

const Square = ({ value , onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin:"3px",
        fontFamily:"cursive"
      }}
      className="bg-white rounded-lg w-4/12 "
    >
      <h5 className="font-bold text-3xl text-red-800">{value}</h5>
    </div>
  );
};

export default Square;
