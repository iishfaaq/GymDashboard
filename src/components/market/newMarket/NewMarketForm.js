import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicInfoForm from "./BasicInfoForm";
import GymsForm from "./GymsForm";

const NewMarketForm = ({ setMarkets }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    marketUrl: "",
    headerImage: null,
    type: "STATE",
    gyms: [],
  });

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, headerImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // VAlidate URL
    let formattedUrl = formData.marketUrl;
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = `https://${formattedUrl}`;
    }

    // Convert type to uppercase
  const formattedType = formData.type.toUpperCase();

  // Add new market to the list
  setMarkets((prevMarkets) => [
    ...prevMarkets,
    { ...formData, marketUrl: formattedUrl, type: formattedType },
  ]);

    alert("Market Created!");

    // Redirect to MarketsPage
    navigate("/markets");
  };

  return (
    <form onSubmit={handleSubmit} className="market-form">
      {/* Basic Info */}
      <BasicInfoForm formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} />

      {/* Gyms Selection */}
      <GymsForm gyms={formData.gyms} setGyms={(gyms) => setFormData({ ...formData, gyms })} />

      {/* Buttons */}
      <div className="form-buttons">
        <button type="button" className="cancel-btn" onClick={() => navigate("/markets")}>Cancel</button>
        <button type="submit" className="create-btn">Create Market</button>
      </div>
    </form>
  );
};

export default NewMarketForm;
