import { Typography } from "components/Typography";
import NextLink from "next/link";
import { CustomAnchor } from "./Link.styles";
import { LinkProps } from "./Link.types";

const Link = ({ children, ...props }: LinkProps) => {
  return (
    <NextLink passHref {...props}>
      <CustomAnchor>
        <Typography fontSize="micro">{children}</Typography>
      </CustomAnchor>
    </NextLink>
  );
};

export default Link;
