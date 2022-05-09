import React from 'react';
import styles from './Main.module.scss';

export function Main() {
  return (
    <div className={styles.main} id={'main'}>
      <div className={styles.container}>
        <div className={styles.greetings}>
          <span>Hello there!</span>
          <span>My name is Pilyutin <span>Denis</span></span>
          <h1>Frontend developer</h1>
        </div>
        <div className={styles.photo}>
          <div className={styles.image}/>
        </div>
      </div>
    </div>
  );
}

