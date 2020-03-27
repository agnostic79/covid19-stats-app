import React from "react";

import useData from "../utils/useData";

const CountrySelect = ({ onSelect }) => {
  const { data } = useData("https://covid19.mathdro.id/api/countries/");

  return (
    <div className="CountrySelect">
      <h2>Select country</h2>
      <select onChange={onSelect} selected="Bulgaria">
        {!!data.countries &&
          data.countries.map(country => (
            <option
              value={country.name}
              key={country.name}
              selected={country.name === "Bulgaria"}
            >
              {country.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CountrySelect;
