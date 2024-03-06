import { SvgIconProps } from "../../types/SettingsType";

const GitHubIcon = (props: SvgIconProps) => {
  const { width, height, fill } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.75781 13.9583C6.79253 13.9062 6.77951 13.8498 6.71875 13.7891C6.64062 13.7283 6.57986 13.7196 6.53646 13.763C6.50174 13.8151 6.51476 13.8715 6.57552 13.9323C6.65365 13.9931 6.71441 14.0017 6.75781 13.9583ZM6.39323 13.4245C6.34983 13.3637 6.29774 13.3464 6.23698 13.3724C6.1849 13.4071 6.1849 13.4592 6.23698 13.5286C6.29774 13.5981 6.34983 13.6198 6.39323 13.5938C6.44531 13.559 6.44531 13.5026 6.39323 13.4245ZM5.85938 12.9036C5.87674 12.8689 5.85503 12.8342 5.79427 12.7995C5.73351 12.7821 5.69878 12.7908 5.6901 12.8255C5.66406 12.8689 5.68142 12.9036 5.74219 12.9297C5.81163 12.947 5.85069 12.9384 5.85938 12.9036ZM6.13281 13.2031C6.15017 13.1944 6.15668 13.1749 6.15234 13.1445C6.148 13.1141 6.13281 13.0903 6.10677 13.0729C6.05469 13.0122 6.01128 12.9991 5.97656 13.0339C5.94184 13.0686 5.94618 13.1163 5.98958 13.1771C6.04167 13.2292 6.08941 13.2378 6.13281 13.2031ZM7.2526 14.1797C7.26997 14.1189 7.2309 14.0712 7.13542 14.0365C7.05729 14.0104 7.00087 14.0278 6.96615 14.0885C6.94878 14.1493 6.98785 14.197 7.08333 14.2318C7.16146 14.2578 7.21788 14.2405 7.2526 14.1797ZM7.79948 14.2188C7.79948 14.1493 7.7474 14.1146 7.64323 14.1146C7.55642 14.1146 7.51302 14.1493 7.51302 14.2188C7.51302 14.2882 7.56076 14.3229 7.65625 14.3229C7.75174 14.3229 7.79948 14.2882 7.79948 14.2188ZM8.30729 14.1276C8.28993 14.0668 8.23351 14.0451 8.13802 14.0625C8.04253 14.0799 8.00347 14.1189 8.02083 14.1797C8.03819 14.2491 8.09028 14.2752 8.17708 14.2578C8.26389 14.2405 8.30729 14.197 8.30729 14.1276ZM16.6667 10C16.6667 8.15972 16.0156 6.58854 14.7135 5.28646C13.4115 3.98438 11.8403 3.33333 10 3.33333C8.15972 3.33333 6.58854 3.98438 5.28646 5.28646C3.98438 6.58854 3.33333 8.15972 3.33333 10C3.33333 11.4497 3.75868 12.7539 4.60938 13.9128C5.46007 15.0716 6.55382 15.8767 7.89062 16.3281C8.04688 16.3542 8.16189 16.3325 8.23568 16.263C8.30946 16.1936 8.34635 16.1068 8.34635 16.0026C8.34635 15.5512 8.34201 15.1389 8.33333 14.7656C8.28125 14.7743 8.21398 14.7852 8.13151 14.7982C8.04904 14.8112 7.89497 14.8199 7.66927 14.8242C7.44358 14.8286 7.23524 14.8112 7.04427 14.7721C6.8533 14.7331 6.6645 14.6463 6.47786 14.5117C6.29123 14.3772 6.16319 14.197 6.09375 13.9714C5.8941 13.4592 5.6467 13.138 5.35156 13.0078C5.3342 12.9991 5.31467 12.9839 5.29297 12.9622L5.1888 12.8581L5.09766 12.7344L5.14974 12.6367L5.40365 12.5911C5.45573 12.5911 5.52083 12.5998 5.59896 12.6172C5.67708 12.6345 5.80729 12.7018 5.98958 12.819C6.17188 12.9362 6.3151 13.0903 6.41927 13.2812C6.55816 13.5243 6.72092 13.7066 6.90755 13.8281C7.09418 13.9497 7.28299 14.0104 7.47396 14.0104C7.66493 14.0104 7.82986 13.9952 7.96875 13.9648C8.10764 13.9345 8.23785 13.8932 8.35938 13.8411C8.42014 13.4332 8.56337 13.1337 8.78906 12.9427C8.36372 12.8906 7.99045 12.8103 7.66927 12.7018C7.34809 12.5933 7.03125 12.424 6.71875 12.194C6.40625 11.964 6.16536 11.6341 5.99609 11.2044C5.82682 10.7747 5.74219 10.2561 5.74219 9.64844C5.74219 8.96267 5.97222 8.36806 6.43229 7.86458C6.22396 7.32639 6.24566 6.73611 6.4974 6.09375C6.66233 6.04167 6.89887 6.07422 7.20703 6.19141C7.51519 6.30859 7.77778 6.43663 7.99479 6.57552L8.33333 6.78385C8.83681 6.63628 9.39236 6.5625 10 6.5625C10.6076 6.5625 11.1632 6.63628 11.6667 6.78385C11.7622 6.72309 11.8858 6.64497 12.0378 6.54948C12.1897 6.45399 12.4306 6.34115 12.7604 6.21094C13.0903 6.08073 13.3377 6.04167 13.5026 6.09375C13.7543 6.73611 13.776 7.32639 13.5677 7.86458C14.0278 8.36806 14.2578 8.96267 14.2578 9.64844C14.2578 10.1432 14.197 10.5794 14.0755 10.957C13.954 11.3346 13.7999 11.6385 13.6133 11.8685C13.4266 12.0985 13.1944 12.2917 12.9167 12.4479C12.6389 12.6042 12.3676 12.717 12.1029 12.7865C11.8381 12.8559 11.5408 12.908 11.2109 12.9427C11.5148 13.2118 11.6667 13.6241 11.6667 14.1797C11.6667 14.5269 11.6645 14.9132 11.6602 15.3385C11.6558 15.7639 11.6536 15.9852 11.6536 16.0026C11.6536 16.1068 11.6905 16.1936 11.7643 16.263C11.8381 16.3325 11.9531 16.3542 12.1094 16.3281C13.4462 15.8767 14.5399 15.0716 15.3906 13.9128C16.2413 12.7539 16.6667 11.4497 16.6667 10ZM20 3.75V16.25C20 17.283 19.6332 18.1662 18.8997 18.8997C18.1662 19.6332 17.283 20 16.25 20H3.75C2.71701 20 1.83377 19.6332 1.10026 18.8997C0.366753 18.1662 0 17.283 0 16.25V3.75C0 2.71701 0.366753 1.83377 1.10026 1.10026C1.83377 0.366753 2.71701 0 3.75 0H16.25C17.283 0 18.1662 0.366753 18.8997 1.10026C19.6332 1.83377 20 2.71701 20 3.75Z"
        fill={fill}
        fillOpacity="0.921569"
      />
    </svg>
  );
};

export default GitHubIcon;
