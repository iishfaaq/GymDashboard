import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="search-box-container">
      <input
        type="text"
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="    Search"
        className="search-box"
      />
      <div className="search-icon">
        <FaSearch />
      </div>
    </div>
  )
}

export default SearchBox;
