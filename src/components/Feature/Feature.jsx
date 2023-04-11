import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import React from "react";
import { Link } from "react-router-dom";

const Feature = ({ feature }) => {
  //   console.log(feature);
  const { id, logo, title, company, workPlace, location, jobType, salary } =
    feature;
  return (
    <div className="pb-4">
      <img className="w-40 h-14 pr-8" src={logo} alt="" />
      <h3 className="text-3xl font-medium mt-3"> {title} </h3>
      <h5 className="text-2xl text-gray-600 font-medium mt-2"> {company} </h5>
      <div className="mt-2">
        <button className="border border-indigo-500 rounded-sm font-medium text-indigo-500 py-1 px-2">
          {workPlace}
        </button>
        <button className="border border-indigo-500 rounded-sm font-medium text-indigo-500 py-1 px-2 ml-3">
          {jobType}
        </button>
      </div>
      <div className="flex text-xl text-gray-600 font-medium mt-2">
        <p className="mr-4">
          <FmdGoodOutlinedIcon></FmdGoodOutlinedIcon> {location}
        </p>
        <p>
          <MonetizationOnOutlinedIcon></MonetizationOnOutlinedIcon> Salary:
          {salary}
        </p>
      </div>
      <Link to={`/job/${id}`}>
        <button className="bg-indigo-500 mt-4 px-4 py-2 rounded-md text-lg text-white">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Feature;
