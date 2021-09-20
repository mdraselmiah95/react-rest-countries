import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, flag, capital, population, region } = props.country;
  //   console.log(props.country);
  return (
    <div className="Country">
      <h4>Name: {name}</h4>
      <img src={flag} alt="" />
      <p>
        <small>Region: {region}</small>
      </p>
      <p>
        Capital is: {capital} and Population is: {population}
      </p>
    </div>
  );
};

export default Country;
