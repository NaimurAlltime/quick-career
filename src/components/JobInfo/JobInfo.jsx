import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import React from "react";

const JobInfo = ({ job, handleApplyJob }) => {
  //   console.log(job);
  const {
    id,
    title,
    salary,
    description,
    responsibility,
    requirements,
    experiences,
    location,
    contact,
  } = job;
  return (
    <div className="md:grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <p className="leading-loose">
          <span className="font-semibold">Job Description: </span>
          <span className="text-gray-600">{description}</span>
        </p>
        <p className="leading-loose mt-5">
          <span className="font-semibold">Job Description: </span>
          <span className="text-gray-600">{responsibility}</span>
        </p>
        <p className="leading-loose mt-5">
          <span className="font-medium">Educational Requirements: </span>
          <br />
          {requirements}
        </p>
        <p className="leading-loose mt-5">
          <span className="font-semibold">Experiences: </span>
          <br />
          <span className="text-gray-600">{experiences}</span>
        </p>
      </div>
      <div>
        <h4 className="mt-6 text-lg font-medium">Job Details</h4>
        <hr className="my-3 text-indigo-700" />
        <p>
          <MonetizationOnOutlinedIcon className="text-indigo-500"></MonetizationOnOutlinedIcon>
          <span className="font-bold text-lg text-gray-600 ml-2">
            Salary :
            <span className="text-gray-400  ml-2">{salary} (Per Month)</span>
          </span>
        </p>
        <p className="mt-4">
          <SubtitlesOutlinedIcon className="text-indigo-500"></SubtitlesOutlinedIcon>
          <span className="font-bold text-lg text-gray-600  ml-2">
            Job Title :<span className="text-gray-400  ml-2">{title}</span>
          </span>
        </p>
        <h4 className="mt-7 text-lg font-medium">Contact Information</h4>
        <hr className="my-3 text-indigo-700" />
        <p>
          <PhoneOutlinedIcon className="text-indigo-500"></PhoneOutlinedIcon>
          <span className="font-bold text-lg text-gray-600 ml-2">
            Phone :<span className="text-gray-400  ml-2">{contact.phone}</span>
          </span>
        </p>
        <p className="mt-4">
          <EmailOutlinedIcon className="text-indigo-500"></EmailOutlinedIcon>
          <span className="font-bold text-lg text-gray-600 ml-2">
            Email :<span className="text-gray-400  ml-2">{contact.email}</span>
          </span>
        </p>
        <p className="mt-4">
          <FmdGoodOutlinedIcon className="text-indigo-500"></FmdGoodOutlinedIcon>
          <span className="font-bold text-lg text-gray-600  ml-2">
            Address :<span className="text-gray-400  ml-2">{location}</span>
          </span>
        </p>
        <button
          onClick={() => handleApplyJob(id)}
          className="bg-indigo-500 w-full px-4 py-4 mt-8 font-medium rounded-md text-xl text-white hover:bg-indigo-600"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobInfo;
