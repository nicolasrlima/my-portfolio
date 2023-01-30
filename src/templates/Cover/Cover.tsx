import { CoverContainer } from "./Cover.styles";
import { FormattedMessage } from "react-intl";
import { Typography } from "components/Typography";

const Cover = () => {
  return (
    <CoverContainer>
      <Typography color="subdued" variant="small">
        <FormattedMessage id="cover.presentation" />
      </Typography>
      <Typography className="cover-name" variant="xlarge">
        Nicolas Lima
      </Typography>
      <Typography variant="large">
        <FormattedMessage id="cover.subtitle" />
      </Typography>
      <Typography color="subdued" variant="heading">
        <FormattedMessage id="cover.paragraph" />
      </Typography>
    </CoverContainer>
  );
};

export default Cover;
