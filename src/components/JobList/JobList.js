import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";
import "./JobList.css";
import { Text } from "@welcome-ui/text";

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
      <Text className="PageTitle" variant="h1">
        Our offers
      </Text>

      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}

export default JobList;
