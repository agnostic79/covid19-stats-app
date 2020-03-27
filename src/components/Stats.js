import React from "react";

import useData from "../utils/useData";

const Stats = ({ url, country }) => {
  const { data, loading, error } = useData(url);

  return (
    <div className="Stats">
      {loading && <h3>Data loading...</h3>}
      {error && <h3>{error}</h3>}
      {data.confirmed && data.recovered && data.deaths && data.lastUpdate && (
        <div className="Result">
          <h2>{country || "Worldwide"}</h2>
          <h3>
            <span>Confirmed: </span>
            {data.confirmed.value}
          </h3>
          <h3>
            <span>Recovered: </span>
            {data.recovered.value}
          </h3>
          <h3>
            <span>Deaths: </span>
            {data.deaths.value}
          </h3>
          <h3>
            <span>Fatality rate: </span>
            {((data.deaths.value * 100) / data.confirmed.value).toFixed(2)}
            {"%"}
          </h3>
          <p>
            <small>LastUpdate: {new Date(data.lastUpdate).toString()}</small>
          </p>
        </div>
      )}
    </div>
  );
};

export default Stats;
