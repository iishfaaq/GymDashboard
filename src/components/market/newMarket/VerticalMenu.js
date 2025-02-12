import React from 'react'

const VerticalMenu = ({ selectedTab, setSelectedTab }) => {
    return (
        <div className="vertical-menu">
          <button
            className={selectedTab === "Basic Information" ? "active" : ""}
            onClick={() => setSelectedTab("Basic Information")}
          >
            Basic Information
          </button>
    
          <button
            className={selectedTab === "Gyms" ? "active" : ""}
            onClick={() => setSelectedTab("Gyms")}
          >
            Gyms
          </button>
        </div>
      );
}

export default VerticalMenu;
