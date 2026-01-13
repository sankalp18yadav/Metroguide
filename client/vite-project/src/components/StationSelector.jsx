import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { motion } from 'framer-motion';

const StationSelector = ({ source, destination, onSourceChange, onDestinationChange }) => {
  const [stations, setStations] = useState([]);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: '48px',
      fontSize: '16px',
      fontWeight: '500'
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: '16px',
      fontWeight: '400'
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: '16px',
      fontWeight: '500'
    })
  };

  const apicall = async () => {
    try {
      const api = "https://metroguide.vercel.app/api/getiingstations"; // 🔁 Use correct URL and correct port (backend)
      const response = await fetch(api, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();

      const stationOptions = data.map(station => ({
        value: station.stations,
        label: station.stations
      }));

      setStations(stationOptions);
      console.log("Stations fetched:", stationOptions);
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

  useEffect(() => {
    apicall();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-slate-700"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center"
      >
        Find Your Metro Route
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Source Station
          </label>
          <div className="react-select-container">
            <Select
              value={source ? { value: source, label: source } : null}
              onChange={(option) => onSourceChange(option?.value || '')}
              options={stations}
              placeholder="Select source station..."
              isClearable
              isSearchable
              className="react-select-container"
              classNamePrefix="react-select"
              styles={customStyles}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Destination Station
          </label>
          <div className="react-select-container">
            <Select
              value={destination ? { value: destination, label: destination } : null}
              onChange={(option) => onDestinationChange(option?.value || '')}
              options={stations}
              placeholder="Select destination station..."
              isClearable
              isSearchable
              className="react-select-container"
              classNamePrefix="react-select"
              styles={customStyles}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <p className="text-sm text-blue-700 dark:text-blue-300">
          <span className="font-medium">Note:</span> Only operational stations are available for route planning. 
          Under construction stations can be viewed in the Stations section.
        </p>
      </div>
    </motion.div>
  );
};

export default StationSelector;
