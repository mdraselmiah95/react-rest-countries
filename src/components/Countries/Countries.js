import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

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
      {countries.map((country) => (
        <Country country={country}></Country>
      ))}
    </div>
  );
};

/* 
           name={country.name}
          capital={country.capital}
          population={country.population}

*/
export default Countries;
