import React from "react";

import useData from "../utils/useData";

const CountrySelect = ({ onSelect }) => {
  const { data, loading, error } = useData(
    "https://covid19.mathdro.id/api/countries/"
  );

  return (
    <div className="CountrySelect">
      <h2>Select country</h2>
      <select onChange={onSelect}>
        {data.countries &&
          Object.keys(data.countries).map(country => (
            <option
              value={country}
              key={country}
              selected={country === "Bulgaria"}
            >
              {country}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CountrySelect;
