import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import styles from "./Carousel.module.scss";
import LeftArrow from "../SvgComponents/LeftArrow";
import RightArrow from "../SvgComponents/RightArrow";
import { CardListProps, CardType } from "../../types/CarouselType";

const Card = (props: CardType) => {
  const { isActive, content, isTransparent, handleClick } = props;
  const theme = useTheme();

  const getBackgroundColor = () => {
    if (isActive) return theme.primaryColor;
    return theme.secondaryColor;
  };

  const getOpacity = (type: string) => {
    let opacity = 1;

    if (!isActive && type === "inner") opacity = 0.5;
    if (isTransparent) opacity = 0;

    return opacity;
  };

  return (
    <div
      className={`${styles.card_outer_container} ${isActive && styles.card_outer_container_active}`}
      style={{
        backgroundColor: getBackgroundColor(),
        opacity: getOpacity("outer"),
      }}
    >
      <div
        className={`${styles.card_inner_container} ${isActive && styles.card_inner_container_active}`}
        style={{
          backgroundColor: theme.backgroundColor,
          opacity: getOpacity("inner"),
        }}
        onClick={handleClick}
      >
        {content && <div className={styles.full_opacity}>{content.name}</div>}
      </div>
    </div>
  );
};

const Carousel = (props: CardListProps) => {
  const { list, openCard } = props;
  const [index, setIndex] = useState(list.length <= 2 ? 0 : 1);
  const theme = useTheme();

  const handleNext = () => {
    if (index + 1 < list.length) setIndex(index + 1);
  };

  const handlePrevious = () => {
    if (index - 1 >= 0) setIndex(index - 1);
  };

  const getOpacity = (position: string) => {
    if (
      (position === "left" && index - 1 >= 0) ||
      (position === "right" && index + 1 < list.length)
    ) {
      return "0.92";
    }

    return "0";
  };

  return (
    <div className={styles.container}>
      <div onClick={handlePrevious}>
        <LeftArrow
          width="14"
          height="24"
          fill={theme.backgroundColor}
          opacity={getOpacity("left")}
        />
      </div>

      <Card
        content={list[index - 1]}
        isTransparent={index - 1 < 0}
        handleClick={handlePrevious}
      />

      <Card
        content={list[index]}
        isActive
        isTransparent={list.length === 0}
        handleClick={openCard}
      />

      <Card
        content={list[index + 1]}
        isTransparent={index + 1 >= list.length}
        handleClick={handleNext}
      />

      <div onClick={handleNext}>
        <RightArrow
          width="14"
          height="24"
          fill={theme.backgroundColor}
          opacity={getOpacity("right")}
        />
      </div>
    </div>
  );
};

export default Carousel;
