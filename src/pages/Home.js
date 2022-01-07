import React from 'react'
import HomeCard from "../components/HomeCard";

import news from "../data/news.json"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
      <div>
        <h1 className={styles.title}>Home</h1>
        <div className={styles.container}>
          {news.map((item) => (
            <HomeCard key={item.Issue} homeData={item} />
          ))}
        </div>
      </div>
    );
}
