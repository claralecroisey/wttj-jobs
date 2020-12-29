import "./JobCard.css";
import { Button } from "@welcome-ui/button";

function JobCard(props) {
  return (
    <div className="JobCard">
      <div>
        <span className="JobName">{props.job.name}</span>
        <p className="JobInfos">
          {props.job.contract_type.en} - {props.job.office.name}
        </p>
      </div>
      <Button variant="primary">See more</Button>
    </div>
  );
}

export default JobCard;
