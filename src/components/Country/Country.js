import React from "react";
import "./Country.css";

const Country = (props) => {
  //   console.log(props.country);
  return (
    <div className="Country">
      <h4>Name: {props.country.name}</h4>
      <img src={props.country.flag} alt="" />
      <h5>
        Capital is: {props.country.capital} and Population is:{" "}
        {props.country.population}
      </h5>
    </div>
  );
};

export default Country;
