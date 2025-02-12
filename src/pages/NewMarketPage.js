import React from 'react';
import VerticalMenu from "../components/market/newMarket/VerticalMenu";
import NewMarketForm from "../components/market/newMarket/NewMarketForm";
import { useState } from "react";

const NewMarketPage = ({setMarkets }) => {
  const [selectedTab, setSelectedTab] = useState("Basic Information");

  return (
    <div className="new-market-container">
      {/* Sidebar */}
      <VerticalMenu selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {/* Form Section */}
      <NewMarketForm selectedTab={selectedTab} setMarkets={setMarkets} />
    </div>
  );
};

export default NewMarketPage;
