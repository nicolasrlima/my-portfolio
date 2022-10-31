import { CustomButton } from "./IconButton.styles";
import { IconButtonProps } from "./IconButton.types";

const IconButton = ({ icon, ...props }: IconButtonProps) => (
  <CustomButton {...props}>{icon}</CustomButton>
);

export default IconButton;
