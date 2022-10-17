import { Typography } from "components/Typography";
import NextLink, { LinkProps } from "next/link";
import { CustomAnchor } from "./Link.styles";

const Link = ({
  children,
  ...props
}: Omit<LinkProps, "passHref"> & {
  children?: React.ReactNode;
}) => {
  return (
    <NextLink passHref {...props}>
      <CustomAnchor>
        <Typography fontSize="micro">{children}</Typography>
      </CustomAnchor>
    </NextLink>
  );
};

export default Link;
