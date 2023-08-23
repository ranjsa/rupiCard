import React from "react";
import styles from "./benifits.module.css";

export default function Benefits(props) {
  const { text, img, width, height } = props;
  const textArr = text.split("|");
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={img} width={width} height={height} alt="unicards" />
      </div>
      <div className={styles.primaryText}>{textArr[0]}</div>
      <div className={styles.secondaryText}>
        {textArr[1][0] === "/" ? (
          <img src={textArr[1]} width={84} height={33} alt="unicards" />
        ) : (
          textArr[1]
        )}
      </div>
    </div>
  );
}
