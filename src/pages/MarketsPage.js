import React, { useState } from "react";
import MarketList from "../components/market/MarketList";
import NewMarketButton from "../components/market/NewMarketButton";
import DeleteMarketButton from "../components/market/DeleteMarketButton";
import SearchBox from "../components/util/SearchBox";

const MarketsPage = ({ markets, setMarkets }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMarkets, setSelectedMarkets] = useState(new Array(markets.length).fill(false));

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Delete selected markets
  const handleDeleteSelected = () => {
    const newMarkets = markets.filter((_, index) => !selectedMarkets[index]);
    setMarkets(newMarkets);
    setSelectedMarkets(new Array(newMarkets.length).fill(false)); // Reset selection
  };

  return (
    <div className="market-container">
      {/* Header section */}
      <div className="market-header">
        <h2>Markets</h2>
        <NewMarketButton />
      </div>

      {/* Search & Delete Section */}
      <div className="search-delete">
        <SearchBox searchQuery={searchQuery} onSearchChange={handleSearchChange} />

        <DeleteMarketButton onDelete={handleDeleteSelected} />
      </div>

      {/* Table section */}
      <div className="market-table-container">
        <MarketList
          searchQuery={searchQuery}
          markets={markets}
          selectedMarkets={selectedMarkets}
          setSelectedMarkets={setSelectedMarkets}
        />
      </div>
    </div>
  );
};

export default MarketsPage;
