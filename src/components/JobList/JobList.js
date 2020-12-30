import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";
import "./JobList.css";
import { Text } from "@welcome-ui/text";
import { InputText } from "@welcome-ui/input-text";
import { Select } from "@welcome-ui/select";
import { DatePicker } from "@welcome-ui/date-picker";
import { Box } from "@welcome-ui/box";
import {
  CONTRACT_TYPES_EN_OPTIONS,
  GROUP_BY_EN_OPTIONS,
} from "../../constants";

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
  const [selectedGroupBy, setSelectedGroupBy] = useState("department");

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
      )
      .sort((jobA, jobB) => {
        if (selectedGroupBy === "none") {
          return 0;
        }
        return jobA[selectedGroupBy].name.localeCompare(
          jobB[selectedGroupBy].name
        );
      });

    setFilteredJobs(filteredJobs);
  }, [
    searchTerm,
    selectedContractType,
    selectedPublishedAfterDate,
    selectedGroupBy,
    jobs,
  ]);

  return (
    <Box
      display="flex"
      width={1}
      height="100vh"
      overflow="auto"
      justifyContent="center"
    >
      <Box
        position="fixed"
        height="50vh"
        width={1}
        top={0}
        left={0}
        backgroundColor="primary.200"
        zIndex={-1}
      />
      <Box
        backgroundColor="nude.100"
        borderRadius="sm"
        width="70%"
        marginTop="100px"
        padding="50px"
        boxShadow="sm"
        height="fit-content"
      >
        <Text
          className="PageTitle"
          textAlign="center"
          marginBottom="16px"
          variant="h1"
        >
          Our offers
        </Text>

        <Box marginBottom="24px" display="flex" className="FilterBar">
          <InputText
            placeholder="Your dream job?"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <Select
            placeholder="Contract Type"
            isMultiple
            value={selectedContractType}
            options={CONTRACT_TYPES_EN_OPTIONS}
            onChange={(event) => setSelectedContractType(event)}
          />
          <DatePicker
            placeholder="Published After"
            maxDate={new Date()}
            value={selectedPublishedAfterDate}
            onChange={(event) => setSelectedPublishedAfterDate(event)}
          />
          <Select
            placeholder="Group by"
            value={selectedGroupBy}
            options={GROUP_BY_EN_OPTIONS}
            onChange={(event) => setSelectedGroupBy(event)}
          />
        </Box>

        {filteredJobs.map((job, index) => (
          <JobCard key={index} job={job} searchTerm={searchTerm} />
        ))}
      </Box>
    </Box>
  );
}

export default JobList;
