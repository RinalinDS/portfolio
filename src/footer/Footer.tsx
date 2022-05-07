import React from 'react';
import containerStyle from '../common/styles/Container.module.css';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerBlock}>
      <div className={`${containerStyle.container} ${styles.footerContainer} `}>


        <h2 className={styles.title}> Socials </h2>

        <div className={styles.socials}>
          <div className={styles.icon}/>
          <div className={styles.icon}/>
          <div className={styles.icon}/>
          <div className={styles.icon}/>
        </div>
      </div>
    </div>


  );
};

export default Footer;


