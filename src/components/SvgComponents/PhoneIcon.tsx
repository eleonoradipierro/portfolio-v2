import { SvgIconProps } from "../../types/SettingsType";

const PhoneIcon = (props: SvgIconProps) => {
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
        d="M16.6667 13.8672C16.6667 13.7717 16.658 13.7023 16.6406 13.6589C16.6233 13.6155 16.5451 13.5438 16.4062 13.444C16.2674 13.3442 16.0916 13.2357 15.8789 13.1185C15.6662 13.0013 15.4601 12.8863 15.2604 12.7734C15.0608 12.6606 14.8633 12.5521 14.668 12.4479C14.4727 12.3437 14.349 12.2786 14.2969 12.2526C14.2535 12.2266 14.171 12.1701 14.0495 12.0833C13.928 11.9965 13.8194 11.9314 13.724 11.888C13.6285 11.8446 13.5373 11.8229 13.4505 11.8229C13.3203 11.8229 13.1619 11.9119 12.9753 12.0898C12.7886 12.2678 12.6172 12.4631 12.4609 12.6758C12.3047 12.8885 12.1376 13.0838 11.9596 13.2617C11.7817 13.4397 11.6363 13.5286 11.5234 13.5286C11.4627 13.5286 11.3911 13.5135 11.3086 13.4831C11.2261 13.4527 11.1589 13.4245 11.1068 13.3984C11.0547 13.3724 10.9809 13.3312 10.8854 13.2747C10.7899 13.2183 10.7292 13.1814 10.7031 13.1641C9.84375 12.6866 9.1059 12.1376 8.48958 11.5169C7.87326 10.8963 7.32205 10.1562 6.83594 9.29687C6.81858 9.27083 6.78168 9.21007 6.72526 9.11458C6.66884 9.0191 6.6276 8.94531 6.60156 8.89323C6.57552 8.84115 6.54731 8.77387 6.51693 8.69141C6.48654 8.60894 6.47135 8.53733 6.47135 8.47656C6.47135 8.36372 6.56033 8.21832 6.73828 8.04036C6.91623 7.86241 7.11154 7.69531 7.32422 7.53906C7.53689 7.38281 7.7322 7.21137 7.91016 7.02474C8.08811 6.83811 8.17708 6.67969 8.17708 6.54948C8.17708 6.46267 8.15538 6.37153 8.11198 6.27604C8.06858 6.18056 8.00347 6.07205 7.91667 5.95052C7.82986 5.82899 7.77344 5.74653 7.7474 5.70312C7.72135 5.65104 7.65625 5.52734 7.55208 5.33203C7.44792 5.13672 7.33941 4.93924 7.22656 4.73958C7.11372 4.53993 6.9987 4.33377 6.88151 4.12109C6.76432 3.90842 6.65582 3.73264 6.55599 3.59375C6.45616 3.45486 6.38455 3.37674 6.34115 3.35937C6.29774 3.34201 6.2283 3.33333 6.13281 3.33333C5.71615 3.33333 5.27778 3.42882 4.81771 3.61979C4.4184 3.80208 4.07118 4.21224 3.77604 4.85026C3.4809 5.48828 3.33333 6.05469 3.33333 6.54948C3.33333 6.68837 3.34418 6.83594 3.36589 6.99219C3.38759 7.14844 3.40929 7.28082 3.43099 7.38932C3.45269 7.49783 3.49175 7.64106 3.54818 7.81901C3.6046 7.99696 3.648 8.125 3.67839 8.20312C3.70877 8.28125 3.76302 8.42448 3.84115 8.63281C3.91927 8.84115 3.96701 8.97135 3.98437 9.02344C4.50521 10.447 5.44488 11.8381 6.80339 13.1966C8.16189 14.5551 9.55295 15.4948 10.9766 16.0156C11.0286 16.033 11.1589 16.0807 11.3672 16.1589C11.5755 16.237 11.7187 16.2912 11.7969 16.3216C11.875 16.352 12.003 16.3954 12.181 16.4518C12.3589 16.5082 12.5022 16.5473 12.6107 16.569C12.7192 16.5907 12.8516 16.6124 13.0078 16.6341C13.1641 16.6558 13.3116 16.6667 13.4505 16.6667C13.9453 16.6667 14.5117 16.5191 15.1497 16.224C15.7878 15.9288 16.1979 15.5816 16.3802 15.1823C16.5712 14.7222 16.6667 14.2839 16.6667 13.8672ZM20 3.75V16.25C20 17.283 19.6332 18.1662 18.8997 18.8997C18.1662 19.6332 17.283 20 16.25 20H3.75C2.71701 20 1.83377 19.6332 1.10026 18.8997C0.366753 18.1662 0 17.283 0 16.25V3.75C0 2.71701 0.366753 1.83377 1.10026 1.10026C1.83377 0.366753 2.71701 0 3.75 0H16.25C17.283 0 18.1662 0.366753 18.8997 1.10026C19.6332 1.83377 20 2.71701 20 3.75Z"
        fill={fill}
        fill-opacity="0.921569"
      />
    </svg>
  );
};

export default PhoneIcon;