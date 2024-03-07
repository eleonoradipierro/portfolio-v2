import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={`${styles.use_nycd_font} ${styles.text_container}`}>
      <p>Welcome, I'm Eleonora.</p>
      <p>
        I'm a passionate frontend web developer based in Milan, Italy. I love
        coding and in my free time I like to learn about new technologies,
        workout, read and play videogames.
      </p>
    </div>
  );
};
export default About;
