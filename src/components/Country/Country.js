import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, flag, capital, population } = props.country;
  //   console.log(props.country);
  return (
    <div className="Country">
      <h4>Name: {name}</h4>
      <img src={flag} alt="" />
      <h5>
        Capital is: {capital} and Population is: {population}
      </h5>
    </div>
  );
};

export default Country;
