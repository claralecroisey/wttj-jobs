import "./JobCard.css";

function JobCard(props) {
  return (
    <div className="JobCard">
      <div>
        <span className="JobName">{props.job.name}</span>
        <p className="JobInfos">
          {props.job.contract_type.en} - {props.job.office.name}
        </p>
      </div>
      <button>See more</button>
    </div>
  );
}

export default JobCard;
