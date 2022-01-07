import React from "react";

import styles from "../styles/HomeCard.module.css";

export default function HomeCard(props) {
  return (
    <div className={styles.card}>
      <img
        id={styles.img}
        src={props.homeData.Image}
        alt={props.homeData.Villan}
      />
      <div className={styles.text}>
        <h3 className={styles.villan}>{props.homeData.Villan}</h3>
        <p className={styles.name}>{props.homeData.Issue}</p>
        <p>{props.homeData.Description}</p>
      </div>
    </div>
  );
}
