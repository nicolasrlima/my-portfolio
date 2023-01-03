import { Typography } from "components/Typography";
import { CoverContainer } from "./Cover.styles";

const Cover = () => {
  return (
    <CoverContainer>
      <Typography color="subdued" variant="small">
        Hi everyone, I&apos;m
      </Typography>
      <Typography className="cover-name" variant="xlarge">
        Nicolas Lima
      </Typography>
      <Typography variant="large">I build things for the web</Typography>
      <Typography color="subdued" variant="heading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu pretium
        aliquam feugiat quis vulputate tortor, faucibus.{" "}
      </Typography>
    </CoverContainer>
  );
};

export default Cover;
