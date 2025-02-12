import React, { useState } from "react";
import MarketItem from "./MarketItem";

const MarketList = ({ searchQuery, markets,selectedMarkets, setSelectedMarkets }) => {
  const [selectAll, setSelectAll] = useState(false);

  // Filter markets based on search query
  const filteredMarkets = markets.filter((market) =>
    market.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedMarkets(new Array(markets.length).fill(newSelectAll));
  };

  const handleCheckboxChange = (index) => {
    const newSelectedMarkets = [...selectedMarkets];
    newSelectedMarkets[index] = !newSelectedMarkets[index];
    setSelectedMarkets(newSelectedMarkets);
    setSelectAll(newSelectedMarkets.every((item) => item)); // Update "select all" state
  };

  return (
    <table className="market-table">
      <thead>
        <tr>
          <th style={{ width: "5%" }}>
            <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
          </th>
          <th style={{ width: "80%" }}>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {filteredMarkets.map((market, index) => (
          <tr key={index}>
            <td style={{ width: "5%" }}>
              <input
                type="checkbox"
                checked={selectedMarkets[index]}
                onChange={() => handleCheckboxChange(index)}
              />
            </td>
            <MarketItem name={market.name} type={market.type} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MarketList;
