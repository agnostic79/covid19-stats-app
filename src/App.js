import React, { useState, useEffect } from "react";

import "./App.scss";

import Stats from "./components/Stats";
import Footer from "./components/Footer";
import CountrySelect from "./components/CountrySelect";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState("Bulgaria");

  const onSelect = e => {
    setSelectedCountry(e.target.value);
  };
  return (
    <div className="App">
      <div className="App__title">
        <h1>Covid 19 Pandemic</h1>
        <CountrySelect onSelect={onSelect} />
      </div>
      <div className="App__body">
        <Stats url={"https://covid19.mathdro.id/api/"} />

        {selectedCountry && (
          <Stats
            url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
            country={selectedCountry}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
