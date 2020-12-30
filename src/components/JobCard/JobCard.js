import "./JobCard.css";
import { Text } from "@welcome-ui/text";
import { Button } from "@welcome-ui/button";
import { Modal, useModalState } from "@welcome-ui/modal";
import { Box } from "@welcome-ui/box";

import JobShow from "../JobShow/JobShow";
import { getHighlightedContent } from "../../textFormatter";

function JobCard(props) {
  const { name, contract_type, office } = props.job;

  const modal = useModalState();

  return (
    <Box className="JobCard">
      <div>
        <Text
          variant="h5"
          lineHeight="1.5"
          dangerouslySetInnerHTML={getHighlightedContent(
            name,
            props.searchTerm
          )}
        />
        <Text
          variant="body2"
          dangerouslySetInnerHTML={getHighlightedContent(
            `${contract_type.en} - ${office.name}`,
            props.searchTerm
          )}
        />
      </div>

      <Modal.Trigger as={Button} {...modal}>
        See more
      </Modal.Trigger>

      <JobShow modal={modal} job={props.job} />
    </Box>
  );
}

export default JobCard;
