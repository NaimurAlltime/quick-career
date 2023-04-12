import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getApplyJob } from "../../utils/fakeDb";
import ApplyJob from "../ApplyJob/ApplyJob";

const AppliedJobs = () => {
  const [applyJobs, setApplyJobs] = useState([]);
  const jobData = useLoaderData();
  // console.log(jobData);

  useEffect(() => {
    let applyJob = [];
    const savedApplyJob = getApplyJob();

    for (const id in savedApplyJob) {
      const foundApplyJob = jobData.find((job) => job.id === id);
      if (foundApplyJob) {
        foundApplyJob.quantity = savedApplyJob[id];
        applyJob.push(foundApplyJob);
      }
    }
    setApplyJobs(applyJob);
  }, []);

  // console.log(applyJobs);

  return (
    <div>
      <div>
        <h2 className="text-xl font-medium text-center p-32">Applied Jobs</h2>
      </div>
      <div className="md:mx-20">
        {applyJobs.map((applyJob) => (
          <ApplyJob key={applyJob.id} applyJob={applyJob}></ApplyJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
