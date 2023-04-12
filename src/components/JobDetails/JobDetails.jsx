import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../utils/fakeDb";
import JobInfo from "../JobInfo/JobInfo";

const JobDetails = () => {
  const jobsData = useLoaderData();
  // console.log(jobsData);
  const { id } = useParams();
  const findData = jobsData.filter((jd) => jd.id === id);

  // apply job button handler
  const handleApplyJob = (id) => {
    // console.log(id);
    addToDb(id);
  };

  return (
    <div className="mt-24 md:mx-20">
      <div>
        {findData.map((job) => (
          <JobInfo
            key={job.id}
            job={job}
            handleApplyJob={handleApplyJob}
          ></JobInfo>
        ))}
      </div>
    </div>
  );
};

export default JobDetails;
