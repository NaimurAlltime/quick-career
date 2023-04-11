import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <div>
      <h2>JobDetails page</h2>
    </div>
  );
};

export default JobDetails;
