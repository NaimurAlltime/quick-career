import { useLoaderData, useParams } from "react-router-dom";
import JobInfo from "../JobInfo/JobInfo";

const JobDetails = () => {
  const jobsData = useLoaderData();
  // console.log(jobsData);
  const { id } = useParams();
  // console.log(id);
  const findData = jobsData.filter((jd) => jd.id === id);
  // console.log(findData);
  return (
    <div className="mt-24 md:mx-20">
      <div>
        {findData.map((job) => (
          <JobInfo key={job.id} job={job}></JobInfo>
        ))}
      </div>
    </div>
  );
};

export default JobDetails;
