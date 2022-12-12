import { useTheme } from "@emotion/react";
import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => {
  const { colors } = useTheme();

  return (
    <svg
      width="178"
      height="60"
      viewBox="0 0 79 27"
      fill={colors.text.default}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 0.8H0.8V1V26V26.2H1H57H57.2V26V19.75H56.8V25.8H1.2V1.2H56.8V7.25H57.2V1V0.8H57H1ZM10.05 18H10.23V9.32959L15.084 18H15.384V9.15H15.204V17.8159L10.338 9.15H10.05V18ZM17.6957 11.628V18H17.8757V11.628H17.6957ZM17.5697 9.648C17.6297 9.708 17.7037 9.738 17.7917 9.738C17.8757 9.738 17.9477 9.708 18.0077 9.648C18.0677 9.588 18.0977 9.514 18.0977 9.426C18.0977 9.342 18.0677 9.27 18.0077 9.21C17.9477 9.15 17.8757 9.12 17.7917 9.12C17.7037 9.12 17.6297 9.15 17.5697 9.21C17.5097 9.27 17.4797 9.342 17.4797 9.426C17.4797 9.514 17.5097 9.588 17.5697 9.648ZM21.5604 17.724C22.0244 17.976 22.5204 18.102 23.0484 18.102C23.4924 18.102 23.8784 18.04 24.2064 17.916C24.5384 17.792 24.8144 17.628 25.0344 17.424C25.2584 17.22 25.4244 16.998 25.5324 16.758C25.6444 16.518 25.7004 16.282 25.7004 16.05H25.5144C25.5144 16.334 25.4244 16.622 25.2444 16.914C25.0644 17.202 24.7924 17.444 24.4284 17.64C24.0644 17.836 23.6044 17.934 23.0484 17.934C22.5564 17.934 22.0924 17.816 21.6564 17.58C21.2204 17.34 20.8664 16.99 20.5944 16.53C20.3264 16.066 20.1924 15.498 20.1924 14.826C20.1924 14.154 20.3284 13.588 20.6004 13.128C20.8724 12.664 21.2244 12.314 21.6564 12.078C22.0924 11.838 22.5564 11.718 23.0484 11.718C23.4804 11.718 23.8724 11.798 24.2244 11.958C24.5764 12.118 24.8664 12.332 25.0944 12.6C25.3224 12.868 25.4604 13.168 25.5084 13.5C25.5124 13.52 25.5144 13.544 25.5144 13.572V13.638H25.7004V13.62V13.602C25.7004 13.386 25.6404 13.158 25.5204 12.918C25.4004 12.678 25.2264 12.456 24.9984 12.252C24.7704 12.044 24.4924 11.876 24.1644 11.748C23.8364 11.616 23.4644 11.55 23.0484 11.55C22.5204 11.55 22.0244 11.676 21.5604 11.928C21.0964 12.18 20.7204 12.55 20.4324 13.038C20.1484 13.522 20.0064 14.118 20.0064 14.826C20.0064 15.53 20.1484 16.126 20.4324 16.614C20.7204 17.102 21.0964 17.472 21.5604 17.724ZM28.8767 17.67C29.3367 17.958 29.8627 18.102 30.4547 18.102C31.0467 18.102 31.5707 17.958 32.0267 17.67C32.4867 17.378 32.8467 16.982 33.1067 16.482C33.3667 15.982 33.4967 15.422 33.4967 14.802C33.4967 14.178 33.3667 13.622 33.1067 13.134C32.8467 12.642 32.4867 12.256 32.0267 11.976C31.5707 11.692 31.0467 11.55 30.4547 11.55C29.8627 11.55 29.3367 11.692 28.8767 11.976C28.4207 12.256 28.0627 12.642 27.8027 13.134C27.5427 13.622 27.4127 14.178 27.4127 14.802C27.4127 15.422 27.5427 15.982 27.8027 16.482C28.0627 16.982 28.4207 17.378 28.8767 17.67ZM31.9307 17.514C31.5027 17.794 31.0107 17.934 30.4547 17.934C29.8987 17.934 29.4067 17.794 28.9787 17.514C28.5507 17.234 28.2127 16.858 27.9647 16.386C27.7207 15.91 27.5987 15.382 27.5987 14.802C27.5987 14.222 27.7207 13.7 27.9647 13.236C28.2127 12.768 28.5507 12.398 28.9787 12.126C29.4067 11.854 29.8987 11.718 30.4547 11.718C31.0107 11.718 31.5027 11.854 31.9307 12.126C32.3587 12.398 32.6947 12.768 32.9387 13.236C33.1867 13.7 33.3107 14.222 33.3107 14.802C33.3107 15.382 33.1867 15.91 32.9387 16.386C32.6947 16.858 32.3587 17.234 31.9307 17.514ZM35.8594 18V8.622H35.6794V18H35.8594ZM39.171 17.892C39.535 18.032 39.969 18.102 40.473 18.102C40.869 18.102 41.241 18.046 41.589 17.934C41.937 17.818 42.239 17.656 42.495 17.448C42.7394 17.2525 42.9254 17.027 43.0532 16.7714C43.054 16.9864 43.058 17.1519 43.065 17.268C43.073 17.4 43.097 17.534 43.137 17.67C43.165 17.762 43.193 17.838 43.221 17.898C43.249 17.954 43.271 17.988 43.287 18H43.473C43.457 17.98 43.433 17.942 43.401 17.886C43.373 17.83 43.343 17.752 43.311 17.652C43.287 17.572 43.269 17.478 43.257 17.37C43.245 17.258 43.239 17.14 43.239 17.016V13.914V13.668V13.422C43.239 13.03 43.129 12.696 42.909 12.42C42.693 12.14 42.397 11.926 42.021 11.778C41.645 11.626 41.217 11.55 40.737 11.55C40.201 11.55 39.737 11.636 39.345 11.808C38.953 11.98 38.651 12.226 38.439 12.546C38.231 12.862 38.127 13.238 38.127 13.674H38.313C38.313 13.074 38.527 12.598 38.955 12.246C39.387 11.894 39.981 11.718 40.737 11.718C41.465 11.718 42.033 11.878 42.441 12.198C42.849 12.514 43.053 12.922 43.053 13.422V13.536V13.644C43.053 13.864 42.853 14.026 42.453 14.13C42.057 14.234 41.425 14.33 40.557 14.418C40.013 14.47 39.553 14.568 39.177 14.712C38.805 14.856 38.523 15.054 38.331 15.306C38.139 15.558 38.043 15.876 38.043 16.26C38.043 16.66 38.139 16.998 38.331 17.274C38.527 17.546 38.807 17.752 39.171 17.892ZM41.775 17.676C41.391 17.848 40.963 17.934 40.491 17.934C39.775 17.934 39.219 17.788 38.823 17.496C38.427 17.204 38.229 16.796 38.229 16.272C38.229 15.736 38.435 15.342 38.847 15.09C39.263 14.834 39.857 14.668 40.629 14.592C41.201 14.536 41.707 14.466 42.147 14.382C42.568 14.3016 42.87 14.1919 43.053 14.053V15.912C43.053 16.308 42.937 16.658 42.705 16.962C42.473 17.266 42.163 17.504 41.775 17.676ZM46.5412 17.988C46.8372 18.064 47.1792 18.102 47.5672 18.102C47.9352 18.102 48.2672 18.066 48.5632 17.994C48.8592 17.918 49.1132 17.81 49.3252 17.67C49.5372 17.526 49.6992 17.354 49.8112 17.154C49.9272 16.95 49.9852 16.72 49.9852 16.464C49.9852 16.196 49.9352 15.968 49.8352 15.78C49.7352 15.592 49.5852 15.434 49.3852 15.306C49.1892 15.174 48.9432 15.062 48.6472 14.97C48.3512 14.878 48.0052 14.796 47.6092 14.724C47.1812 14.644 46.8032 14.546 46.4752 14.43C46.1512 14.314 45.8972 14.156 45.7132 13.956C45.5332 13.752 45.4432 13.486 45.4432 13.158C45.4432 12.838 45.5392 12.572 45.7312 12.36C45.9272 12.144 46.1872 11.984 46.5112 11.88C46.8352 11.772 47.1892 11.718 47.5732 11.718C47.9452 11.718 48.2912 11.766 48.6112 11.862C48.9312 11.958 49.1892 12.122 49.3852 12.354C49.5812 12.582 49.6792 12.898 49.6792 13.302V13.374V13.446H49.8652V13.368V13.296C49.8652 12.876 49.7612 12.538 49.5532 12.282C49.3452 12.026 49.0652 11.84 48.7132 11.724C48.3652 11.608 47.9772 11.55 47.5492 11.55C47.1412 11.55 46.7632 11.612 46.4152 11.736C46.0672 11.86 45.7872 12.042 45.5752 12.282C45.3632 12.518 45.2572 12.808 45.2572 13.152C45.2572 13.428 45.3112 13.664 45.4192 13.86C45.5312 14.052 45.6872 14.214 45.8872 14.346C46.0912 14.474 46.3372 14.582 46.6252 14.67C46.9132 14.754 47.2332 14.828 47.5852 14.892C48.2972 15.016 48.8432 15.186 49.2232 15.402C49.6072 15.614 49.7992 15.968 49.7992 16.464C49.7992 16.764 49.7072 17.024 49.5232 17.244C49.3392 17.464 49.0792 17.634 48.7432 17.754C48.4112 17.874 48.0152 17.934 47.5552 17.934C46.8672 17.934 46.3332 17.802 45.9532 17.538C45.5732 17.274 45.3672 16.91 45.3352 16.446C45.3312 16.398 45.3292 16.35 45.3292 16.302V16.17H45.1432V16.296C45.1432 16.344 45.1452 16.39 45.1492 16.434C45.1692 16.694 45.2332 16.928 45.3412 17.136C45.4492 17.34 45.6032 17.514 45.8032 17.658C46.0032 17.802 46.2492 17.912 46.5412 17.988ZM54.8977 9.15V18H58.7737V17.832H55.0777V9.15H54.8977ZM60.7269 11.628V18H60.9069V11.628H60.7269ZM60.6009 9.648C60.6609 9.708 60.7349 9.738 60.8229 9.738C60.9069 9.738 60.9789 9.708 61.0389 9.648C61.0989 9.588 61.1289 9.514 61.1289 9.426C61.1289 9.342 61.0989 9.27 61.0389 9.21C60.9789 9.15 60.9069 9.12 60.8229 9.12C60.7349 9.12 60.6609 9.15 60.6009 9.21C60.5409 9.27 60.5109 9.342 60.5109 9.426C60.5109 9.514 60.5409 9.588 60.6009 9.648ZM67.2677 14.844V18H67.4477V14.862V14.196V13.878C67.4477 13.726 67.4777 13.532 67.5377 13.296C67.6017 13.056 67.7097 12.816 67.8617 12.576C68.0137 12.332 68.2237 12.128 68.4917 11.964C68.7597 11.8 69.0977 11.718 69.5057 11.718C69.9057 11.718 70.2157 11.792 70.4357 11.94C70.6597 12.084 70.8197 12.262 70.9157 12.474C71.0117 12.686 71.0697 12.9 71.0897 13.116C71.1097 13.328 71.1197 13.504 71.1197 13.644V14.118V14.832V18H71.2997V14.694V14.046V13.5C71.2997 13.06 71.2317 12.696 71.0957 12.408C70.9637 12.12 70.7637 11.906 70.4957 11.766C70.2317 11.622 69.8997 11.55 69.4997 11.55C69.0157 11.55 68.6077 11.664 68.2757 11.892C67.9477 12.116 67.6997 12.404 67.5317 12.756C67.4835 12.8559 67.4421 12.9571 67.4078 13.0597C67.3798 12.8651 67.3371 12.6879 67.2797 12.528C67.1677 12.212 66.9837 11.97 66.7277 11.802C66.4717 11.634 66.1237 11.55 65.6837 11.55C65.2037 11.55 64.7937 11.666 64.4537 11.898C64.1177 12.126 63.8617 12.426 63.6857 12.798C63.6501 12.8724 63.6181 12.9479 63.5897 13.0243V11.628H63.4097V18H63.5897V14.028C63.5897 13.84 63.6237 13.616 63.6917 13.356C63.7597 13.096 63.8737 12.842 64.0337 12.594C64.1937 12.342 64.4077 12.134 64.6757 11.97C64.9477 11.802 65.2857 11.718 65.6897 11.718C66.0657 11.718 66.3597 11.79 66.5717 11.934C66.7877 12.078 66.9437 12.258 67.0397 12.474C67.1397 12.686 67.2017 12.902 67.2257 13.122C67.2537 13.342 67.2677 13.53 67.2677 13.686V14.16V14.844ZM74.5147 17.892C74.8788 18.032 75.3128 18.102 75.8167 18.102C76.2128 18.102 76.5847 18.046 76.9327 17.934C77.2807 17.818 77.5827 17.656 77.8388 17.448C78.0831 17.2525 78.2692 17.027 78.3969 16.7715C78.3978 16.9864 78.4017 17.152 78.4088 17.268C78.4167 17.4 78.4408 17.534 78.4808 17.67C78.5088 17.762 78.5368 17.838 78.5648 17.898C78.5928 17.954 78.6148 17.988 78.6308 18H78.8167C78.8008 17.98 78.7767 17.942 78.7448 17.886C78.7168 17.83 78.6868 17.752 78.6547 17.652C78.6308 17.572 78.6127 17.478 78.6008 17.37C78.5888 17.258 78.5827 17.14 78.5827 17.016V13.914V13.668V13.422C78.5827 13.03 78.4727 12.696 78.2527 12.42C78.0368 12.14 77.7408 11.926 77.3648 11.778C76.9887 11.626 76.5608 11.55 76.0807 11.55C75.5448 11.55 75.0807 11.636 74.6888 11.808C74.2968 11.98 73.9948 12.226 73.7828 12.546C73.5748 12.862 73.4707 13.238 73.4707 13.674H73.6568C73.6568 13.074 73.8708 12.598 74.2988 12.246C74.7308 11.894 75.3248 11.718 76.0807 11.718C76.8088 11.718 77.3767 11.878 77.7848 12.198C78.1927 12.514 78.3968 12.922 78.3968 13.422V13.536V13.644C78.3968 13.864 78.1967 14.026 77.7968 14.13C77.4007 14.234 76.7688 14.33 75.9007 14.418C75.3568 14.47 74.8968 14.568 74.5208 14.712C74.1488 14.856 73.8668 15.054 73.6748 15.306C73.4827 15.558 73.3867 15.876 73.3867 16.26C73.3867 16.66 73.4827 16.998 73.6748 17.274C73.8708 17.546 74.1507 17.752 74.5147 17.892ZM77.1188 17.676C76.7347 17.848 76.3067 17.934 75.8347 17.934C75.1188 17.934 74.5628 17.788 74.1667 17.496C73.7708 17.204 73.5728 16.796 73.5728 16.272C73.5728 15.736 73.7787 15.342 74.1908 15.09C74.6068 14.834 75.2008 14.668 75.9727 14.592C76.5448 14.536 77.0508 14.466 77.4908 14.382C77.9118 14.3016 78.2138 14.1919 78.3968 14.053V15.912C78.3968 16.308 78.2807 16.658 78.0488 16.962C77.8167 17.266 77.5068 17.504 77.1188 17.676Z"
        fill={colors.text.default}
      />
    </svg>
  );
};

export default Logo;
