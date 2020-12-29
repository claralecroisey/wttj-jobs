import "./JobCard.css";
import { Button } from "@welcome-ui/button";
import { Modal, useModalState } from "@welcome-ui/modal";
import JobShow from "../JobShow/JobShow";

function JobCard(props) {
  const { name, contract_type, office } = props.job;

  const modal = useModalState();

  return (
    <div className="JobCard">
      <div>
        <span className="JobName">{name}</span>
        <p className="JobInfos">
          {contract_type.en} - {office.name}
        </p>
      </div>

      <Modal.Trigger as={Button} {...modal}>
        See more
      </Modal.Trigger>

      <JobShow modal={modal} job={props.job} />
    </div>
  );
}

export default JobCard;
