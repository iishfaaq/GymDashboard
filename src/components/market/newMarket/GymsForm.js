import React, { useState, useEffect } from "react";
import SearchBox from "../../util/SearchBox";
const GymsForm = ({ gyms, setGyms }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGyms, setSelectedGyms] = useState([]); 

  // Sample gym data (Replace with API data if needed)
  const availableGyms = [
    { id: 1, name: "Auburn", state: "Alabama" },
    { id: 2, name: "Dallas (Forest Lane)", state: "Alabama" },
    { id: 3, name: "Madison", state: "Alabama" },
    { id: 4, name: "Sacramento", state: "California" },
    { id: 5, name: "Santa Monica", state: "California" },
    { id: 6, name: "Fort Lauderdale", state: "Florida" },
    { id: 7, name: "Miami", state: "Florida" },
    { id: 8, name: "Orlando", state: "Florida" },
    { id: 9, name: "Tampa", state: "Florida" },
    { id: 10, name: "Brooklyn", state: "New York" },
    { id: 11, name: "Manhattan", state: "New York" },
    { id: 12, name: "Queens", state: "New York" },
  ];

  // Sync already added gyms when modal opens
  useEffect(() => {
    if (showModal) {
      setSelectedGyms([...gyms]); 
    }
  }, [showModal, gyms]);

  // Filter gyms based on search term
  const filteredGyms = availableGyms.filter(
    (gym) =>
      gym.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gym.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle checkbox selection
  const handleCheckboxChange = (gym) => {
    setSelectedGyms((prev) =>
      prev.some((g) => g.id === gym.id) 
        ? prev.filter((g) => g.id !== gym.id) 
        : [...prev, gym] 
    );
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Add selected gyms to the main form
  const handleAddGyms = () => {
    setGyms([...selectedGyms]); 
    setShowModal(false);
  };

  return (
    <div className="gyms-section">
      <h3>Gyms</h3>
      {gyms.length === 0 ? (
        <p>No gyms added.</p>
      ) : (
        gyms.map((gym, index) => <p key={index}>{gym.name} - {gym.state}</p>)
      )}

      <button type="button" onClick={() => setShowModal(true)} className="create-btn">
        Add Gym
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
          <label>Add gyms</label>
            
            <SearchBox searchQuery={searchTerm} onSearchChange={handleSearchChange} />

            <table className="gym-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                {filteredGyms.map((gym) => (
                  <tr key={gym.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedGyms.some((g) => g.id === gym.id)} // Keeps selection
                        onChange={() => handleCheckboxChange(gym)}
                      />
                    </td>
                    <td>{gym.name}</td>
                    <td>{gym.state}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="modal-buttons">
              <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="create-btn" onClick={handleAddGyms}>Add Selected Gyms</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GymsForm;
