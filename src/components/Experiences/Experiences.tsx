import styles from "./Experiences.module.scss";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import { EXPERIENCES } from "../../global/dictionary";

const Experiences = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  return (
    <div className={styles.use_nycd_font}>
      {!isCardOpen && (
        <Carousel
          list={EXPERIENCES}
          openCard={() => setIsCardOpen(!isCardOpen)}
        />
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
export default Experiences;
