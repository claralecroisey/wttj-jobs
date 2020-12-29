import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import "./JobList.css";

const WTTJ_JOBS_API_URL =
  "https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs()
      .then((data) => setJobs(data.jobs))
      .catch(console.log);
  }, []);

  const fetchJobs = () => fetch(WTTJ_JOBS_API_URL).then((res) => res.json());

  return (
    <div className="JobList">
      <h1 className="PageTitle">Our offers</h1>

      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}

export default JobList;
