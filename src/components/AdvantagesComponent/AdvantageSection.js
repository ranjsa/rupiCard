import React from "react";

import styles from "./advantages.module.css";

export default function Advantages(props) {
  const { img, text, width, height } = props;
  const textArr = text.split("|");

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.textContainer}>
          {textArr[0]} {"\n"}
          <span>{textArr[1]}</span>
        </div>
        <div className={styles.decscription}>{textArr[2]}</div>
      </div>
      <div className={styles.rightContainer}>
        <img src={img} width={width} height={height} alt="Uni Cards" />
      </div>
    </div>
  );
}
