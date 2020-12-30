import { Text } from "@welcome-ui/text";
import { Modal } from "@welcome-ui/modal";
import { Box } from "@welcome-ui/box";
import { Button } from "@welcome-ui/button";
import { ResumeIcon } from "@welcome-ui/icons.resume";
import { WriteIcon } from "@welcome-ui/icons.write";
import { HouseIcon } from "@welcome-ui/icons.house";

import "./JobShow.css";
import { getHtmlContent } from "../../textFormatter";

function JobShow(props) {
  const { modal, job } = props;

  const getWebsiteUrl = (urls) => {
    const wttjFrUrl = urls.find((url) => url.website_reference === "wttj_fr");
    return wttjFrUrl ? wttjFrUrl.url : null;
  };

  return (
    <Modal
      className="JobShowModal"
      {...modal}
      ariaLabel="Job details"
      size="auto"
    >
      <Modal.Title>
        {job.name} - {job.contract_type.en}
      </Modal.Title>
      <Modal.Content>
        <Box display="flex" alignItems="center" marginBottom="16px">
          <WriteIcon size="xl" marginRight="12px" />
          <Text variant="h3" as="h2">
            Description
          </Text>
        </Box>
        <Text
          variant="body2"
          marginBottom="32px"
          dangerouslySetInnerHTML={getHtmlContent(job.description)}
        />

        <Box display="flex" alignItems="center" marginBottom="16px">
          <ResumeIcon size="xl" marginRight="12px" />
          <Text variant="h3" as="h2">
            Recruitment process
          </Text>
        </Box>

        <Text
          variant="body2"
          marginBottom="32px"
          dangerouslySetInnerHTML={getHtmlContent(job.recruitment_process)}
        />

        <Box display="flex" alignItems="center" marginBottom="16px">
          <HouseIcon size="xl" marginRight="12px" />
          <Text variant="h3" as="h2">
            Office
          </Text>
        </Box>
        <Text variant="body3">{job.office.address}</Text>
        <Text variant="body3">{job.office.zip_code}</Text>
        <Text variant="body3">{job.office.city}</Text>
        <Text variant="body3">{job.office.country.en}</Text>
      </Modal.Content>

      <Modal.Footer>
        <Box width={1} display="flex" justifyContent="center">
          <a href={getWebsiteUrl(job.websites_urls)}>
            <Button>Apply</Button>
          </a>
        </Box>
      </Modal.Footer>
    </Modal>
  );
}

export default JobShow;
