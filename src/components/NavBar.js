import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../styles/NavBar.module.css";
import userData from "../data/user.json";

export default function NavBar() {
  return (
    <header>
      <ul id={styles.nav}>
        <li>
          <NavLink
            to="/prism"
            className={styles.link}
            style={(navData) =>
              navData.isActive ? { color: "#45a29e" } : null
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/friends"
            className={styles.link}
            style={(navData) =>
              navData.isActive ? { color: "#45a29e" } : null
            }
          >
            Friends
          </NavLink>
        </li>
      </ul>
      <div id={styles.userInfo}>
        <p>{userData.UserName}</p>
        <img src={userData.Image} alt={userData.UserName} id={styles.pfp} />
      </div>
    </header>
  );
}
