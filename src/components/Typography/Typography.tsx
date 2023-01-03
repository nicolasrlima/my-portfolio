import { CustomTypography } from "./Typography.styles";
import { TypographyProps } from "./Typography.types";

const Typography = ({
  color = "default",
  component,
  children,
  ...props
}: TypographyProps) => {
  return (
    <CustomTypography as={component} color={color} {...props}>
      {children}
    </CustomTypography>
  );
};

export default Typography;
