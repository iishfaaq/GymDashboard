import React from 'react';

const MarketItem = ({ name, type }) => {
  return (
    <>
      <td>{name}</td>
      <td>
        <span className={`badge ${type.toLowerCase()}`}>{type}</span>
      </td>
    </>
  );
};

export default MarketItem;
