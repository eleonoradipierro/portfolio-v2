import { PaletteProps } from "../../types/SettingsType";
import GitHubIcon from "../SvgComponents/GitHubIcon";
import LinkedinIcon from "../SvgComponents/LinkedinIcon";
import MailIcon from "../SvgComponents/MailIcon";
import PhoneIcon from "../SvgComponents/PhoneIcon";
import styles from "./Contacts.module.scss";

const Contacts = (props: PaletteProps) => {
  const { backgroundColor } = props;

  return (
    <ul className={styles.container}>
      <li>
        <a href="mailto:eleonora.dipierro@gmail.com">
          <MailIcon height="20px" width="20px" fill={backgroundColor} />
        </a>
      </li>
      <li>
        <a href="tel:+393343451004">
          <PhoneIcon height="20px" width="20px" fill={backgroundColor} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/eleonoradipierro/" target="_blank">
          <LinkedinIcon height="20px" width="20px" fill={backgroundColor} />
        </a>
      </li>
      <li>
        <a href="https://github.com/eleonoradipierro" target="_blank">
          <GitHubIcon height="20px" width="20px" fill={backgroundColor} />
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
