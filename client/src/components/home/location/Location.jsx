import React, { useState } from "react";
import Heading from "../../common/Heading";
import { location } from "../../data/Data";
import "./style.css";

const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState(""); // State to track selected location

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  // Filter locations based on the selected location
  const filteredLocations = selectedLocation
    ? location.filter((item) => item.name === selectedLocation)
    : location;

  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading
            title="Explore By Location"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />

          {/* Dropdown to select location */}
          <div className="location-dropdown">
            <label htmlFor="location">Select Location:</label>
            <select
              id="location"
              value={selectedLocation}
              onChange={(e) => handleLocationChange(e.target.value)}
            >
              <option value="">All</option>
              {location.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="content grid3 mtop">
            {filteredLocations.map((item, index) => (
              <div className="box" key={index}>
                <img src={item.cover} alt="" />
                <div className="overlay">
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
