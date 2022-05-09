import React from 'react';
import styles from './Main.module.scss';
import geniusImage from '../assets/image/genius.jpg';

export function Main() {
  const style = {
    backgroundImage: `url(${geniusImage})`
  }
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greetings}>
          <span>Hello there!</span>
          <h1>I am Denis Pilyutin</h1>
          <p>Frontend developer</p>
        </div>
        <div className={styles.photo} style={style}>
        </div>
      </div>
    </div>
  );
}

