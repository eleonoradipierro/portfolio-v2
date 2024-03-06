import { useTheme } from "../../hooks/useTheme";
import GitHubIcon from "../SvgComponents/GitHubIcon";
import LinkedinIcon from "../SvgComponents/LinkedinIcon";
import MailIcon from "../SvgComponents/MailIcon";
import PhoneIcon from "../SvgComponents/PhoneIcon";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  const theme = useTheme();

  return (
    <ul className={styles.container}>
      <li>
        <a href="mailto:eleonora.dipierro@gmail.com">
          <MailIcon height="20px" width="20px" fill={theme.backgroundColor} />
        </a>
      </li>
      <li>
        <a href="tel:+393343451004">
          <PhoneIcon height="20px" width="20px" fill={theme.backgroundColor} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/eleonoradipierro/" target="_blank">
          <LinkedinIcon
            height="20px"
            width="20px"
            fill={theme.backgroundColor}
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/eleonoradipierro" target="_blank">
          <GitHubIcon height="20px" width="20px" fill={theme.backgroundColor} />
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
