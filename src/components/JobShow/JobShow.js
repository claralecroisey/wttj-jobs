import { Text } from "@welcome-ui/text";
import { Modal } from "@welcome-ui/modal";
import { Box } from "@welcome-ui/box";
import { Button } from "@welcome-ui/button";

function JobShow(props) {
  const { modal, job } = props;

  const getWebsiteUrl = (urls) => {
    const wttjFrUrl = urls.find((url) => url.website_reference === "wttj_fr");
    return wttjFrUrl ? wttjFrUrl.url : null;
  };

  const htmlModalContent = { __html: job.description };

  return (
    <Modal {...modal} ariaLabel="Job details">
      <Modal.Title>{job.name}</Modal.Title>
      <Modal.Content>
        <Text variant="body1" dangerouslySetInnerHTML={htmlModalContent} />
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
