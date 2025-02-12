import React from "react";

const DeleteMarketButton = ({ onDelete }) => {
  return (
    <button className="delete-market-btn" onClick={onDelete}>
      Delete 
    </button>
  );
};

export default DeleteMarketButton;
