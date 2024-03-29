import { SVGProps } from "react";
import { useTheme } from "@emotion/react";

const Languages = (props: SVGProps<SVGSVGElement>) => {
  const { colors } = useTheme();

  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.1571 24.5H24L18.8571 11.1667H16.8429L11.7 24.5H13.5429L14.9143 20.9444H20.7857L22.1571 24.5ZM15.6 19.1667L17.8457 13.3356L20.1 19.1667H15.6ZM13.7143 4.94444V3.16667H7.71429V0.5H6V3.16667H0V4.94444H9.20571C8.73079 6.97588 7.79316 8.85964 6.47143 10.4378C5.60983 9.32979 4.94519 8.07166 4.50857 6.72222H2.70857C3.24812 8.53255 4.12142 10.217 5.28 11.6822C3.99953 12.9703 2.49991 14.001 0.857143 14.7222L1.5 16.3756C3.34592 15.5673 5.02711 14.403 6.45429 12.9444C7.85557 14.4229 9.53646 15.585 11.3914 16.3578L12 14.7222C10.3478 14.0599 8.8514 13.0385 7.61143 11.7267C9.25249 9.78707 10.4066 7.45745 10.9714 4.94444H13.7143Z"
        fill={colors.text.default}
      />
    </svg>
  );
};

export default Languages;
