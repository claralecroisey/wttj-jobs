import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";
import "./JobList.css";
import { Text } from "@welcome-ui/text";
import { InputText } from "@welcome-ui/input-text";
import { Select } from "@welcome-ui/select";
import { DatePicker } from "@welcome-ui/date-picker";
import { CONTRACT_TYPES_EN_OPTIONS } from "../../constants";

const WTTJ_JOBS_API_URL =
  "https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContractType, setSelectedContractType] = useState([]);
  const [
    selectedPublishedAfterDate,
    setSelectedPublishedAfterDate,
  ] = useState();

  useEffect(() => {
    const fetchJobs = () => fetch(WTTJ_JOBS_API_URL).then((res) => res.json());

    fetchJobs()
      .then((data) => setJobs(data.jobs))
      .catch(console.log);
  }, []);

  useEffect(() => {
    const filteredJobs = jobs
      .filter(
        (job) =>
          job.name.toLowerCase().includes(searchTerm) ||
          job.description.toLowerCase().includes(searchTerm) ||
          job.profile.toLowerCase().includes(searchTerm)
      )
      .filter((job) =>
        selectedContractType.length > 0
          ? selectedContractType.includes(job.contract_type.en)
          : true
      )
      .filter((job) =>
        selectedPublishedAfterDate
          ? new Date(job.published_at) >= selectedPublishedAfterDate
          : true
      );

    setFilteredJobs(filteredJobs);
  }, [searchTerm, selectedContractType, selectedPublishedAfterDate, jobs]);

  const handleInputChange = (event) => setSearchTerm(event.target.value);
  const handleContractTypeChange = (event) => setSelectedContractType(event);
  const handleOnDateChange = (event) => setSelectedPublishedAfterDate(event);

  return (
    <div className="JobList">
      <Text className="PageTitle" variant="h1">
        Our offers
      </Text>

      <div className="FilterBar">
        <InputText
          placeholder="Your dream job?"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Select
          placeholder="Contract Type"
          isMultiple
          value={selectedContractType}
          options={CONTRACT_TYPES_EN_OPTIONS}
          onChange={handleContractTypeChange}
        />
        <DatePicker
          placeholder="Published After"
          maxDate={new Date()}
          value={selectedPublishedAfterDate}
          onChange={handleOnDateChange}
        />
      </div>

      {filteredJobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}

export default JobList;
