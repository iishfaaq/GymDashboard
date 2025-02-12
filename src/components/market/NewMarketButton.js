import React from 'react';
import {useNavigate} from "react-router-dom"

const NewMarketButton = () => {

  const navigate = useNavigate();

  const goToNewMarket = () => {
    navigate("/new-market");
  };


  return (
    <button onClick ={goToNewMarket} className="new-market-btn">New Market</button>
  )
};

export default NewMarketButton;
