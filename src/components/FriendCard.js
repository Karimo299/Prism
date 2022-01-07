import React from "react";

import styles from "../styles/FriendCard.module.css";

export default function FriendCard(props) {
  return (
    <div className={styles.card}>
      <img
        id={styles.userPic}
        src={props.userData.Image}
        alt={props.userData.Alias}
      />
      <div className={styles.text}>
        <h3 className={styles.alias}>{props.userData.Alias}</h3>
        <p className={styles.name}>{props.userData.Name}</p>
        <p className={styles.bio}>{props.userData.Bio}</p>
      </div>
    </div>
  );
}
