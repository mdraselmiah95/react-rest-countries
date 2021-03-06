import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>This is Countries its own file. {countries.length}</h1>
      <h2>All the country information is here.</h2>
      <div className="countries-container">
        {countries.map((country) => (
          <Country key={country.alpha2Code} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

/* 
           name={country.name}
          capital={country.capital}
          population={country.population}

*/
export default Countries;
