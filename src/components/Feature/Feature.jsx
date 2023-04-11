import React from "react";

const Feature = ({ feature }) => {
  //   console.log(feature);
  const { logo, title, company, workPlace, location, jobType, salary } =
    feature;
  return (
    <div>
      <img className="w-40 h-14" src={logo} alt="" />
      <h3>{title}</h3>
      <h5>{company}</h5>
      <button>{workPlace}</button>
      <button>{jobType}</button>
      <p>{location}</p>
      <p>Salary: {salary}</p>
    </div>
  );
};

export default Feature;
