import React from "react";
import FriendCard from "../components/FriendCard";
import friends from "../data/friends.json";

import styles from "../styles/Friends.module.css";
export default function Friends() {
  return (
    <div>
      <h1 className={styles.title}>Friends</h1>
      <div className={styles.container}>
        {friends.map(item =>
          <FriendCard key={item.Name} userData={item} />
        )}
      </div>
    </div>
  );
}
