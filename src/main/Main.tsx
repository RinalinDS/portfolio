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
          <span>My name is Pilyutin <span>Denis</span></span>
          <h1>Frontend developer</h1>
        </div>
        <div className={styles.photo} >
        <div className={styles.image}  />
        </div>
      </div>
    </div>
  );
}

