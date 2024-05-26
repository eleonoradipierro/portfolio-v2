import { useState } from "react";
import Carousel from "../Carousel/Carousel";
import styles from "./Projects.module.scss";
import { PROJECTS } from "../../global/dictionary";
import CarouselItem from "../CarouselItem/CarouselItem";

const Projects = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  return (
    <div className={styles.use_nycd_font}>
      {!isCardOpen && (
        <Carousel list={PROJECTS} openCard={() => setIsCardOpen(!isCardOpen)} />
      )}
      {isCardOpen && (
        <CarouselItem
          setIsCardOpen={setIsCardOpen}
          isCardOpen={isCardOpen}
        ></CarouselItem>
      )}
    </div>
  );
};
export default Projects;
