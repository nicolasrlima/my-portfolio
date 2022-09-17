import { CustomTypography } from "./Typography.styles";
import { TypographyProps } from "./Typography.types";

const Typography = ({ as, children, ...props }: TypographyProps) => {
  return (
    <CustomTypography as={as} {...props}>
      {children}
    </CustomTypography>
  );
};

export default Typography;
