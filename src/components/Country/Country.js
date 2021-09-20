import React from "react";
import "./Country.css";

const Country = (props) => {
  //   console.log(props);
  return (
    <div className="Country">
      <h4>Name: {props.name}</h4>
      <h5>
        Capital is: {props.capital} and Population is: {props.population}
      </h5>
    </div>
  );
};

export default Country;
