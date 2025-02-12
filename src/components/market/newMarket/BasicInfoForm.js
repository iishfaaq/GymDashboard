import React from 'react';

const BasicInfoForm = ({ formData, handleChange, handleFileChange }) => {
  return (
    <div className="basic-info">
      <label>Name *</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Description *</label>
      <textarea name="description" value={formData.description} onChange={handleChange} required />

      <label>Type *</label>
      <select name="type" value={formData.type} onChange={handleChange} required>
        <option value="">Select Type</option>
        <option value="State">State</option>
        <option value="Custom">Custom</option>
      </select>

      <label>Market URL *</label>
      <input type="url" name="marketUrl" value={formData.marketUrl} onChange={handleChange} />

      <label>Header Image *</label>
      <input type="file" name="headerImage" onChange={handleFileChange} />
    </div>
  );
}

export default BasicInfoForm;
