import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import React from "react";
import { Link } from "react-router-dom";

const ApplyJob = ({ applyJob }) => {
  console.log(applyJob);
  const { id, logo, title, company, workPlace, location, jobType, salary } =
    applyJob;
  return (
    <div className="md:flex items-center gap-24 pb-8">
      <div>
        <img className="w-48 h-24" src={logo} alt="" />
      </div>
      <div className="md:flex justify-between items-center">
        <div>
          <h3 className="text-3xl font-medium mt-3"> {title} </h3>
          <h5 className="text-2xl text-gray-600 font-medium mt-2">
            {" "}
            {company}{" "}
          </h5>
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
        </div>
        <div className="absolute md:right-64">
          <Link to={`/job/${id}`}>
            <button className="bg-indigo-500 hover:bg-indigo-600 mt-4 px-4 py-2 rounded-md text-lg text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
