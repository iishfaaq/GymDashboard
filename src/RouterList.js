import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MarketsPage from './pages/MarketsPage';
import NewMarketPage from './pages/NewMarketPage';

const initialMarkets = [
  { name: "California", type: "STATE" },
  { name: "Florida", type: "STATE" },
  { name: "Gold’s Gym of the Carolinas", type: "STATE" },
  { name: "Tennessee", type: "STATE" },
  { name: "Texas", type: "STATE" },
  { name: "Totowa Market", type: "CUSTOM" },
  { name: "Virginia", type: "CUSTOM" },
];

const RouterList = () => {

  const [markets, setMarkets] = useState(initialMarkets);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/markets" />}/>
        <Route path="/markets" element={<MarketsPage markets={markets} setMarkets={setMarkets} />} />
        <Route path="/new-market" element={<NewMarketPage setMarkets={setMarkets} />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default RouterList;
