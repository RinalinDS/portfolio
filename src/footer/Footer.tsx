import React from 'react';
import containerStyle from '../common/styles/Container.module.css';
import styles from './Footer.module.scss'
import {Title} from '../common/components/title/Title';

const Footer = () => {
  return (
    <div className={styles.footerBlock}>
      <div className={`${containerStyle.container} ${styles.footerContainer} `}>


        <Title text={'Socials'}/>

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


