import React from 'react';
import containerStyle from '../common/styles/Container.module.css';
import styles from './Footer.module.css'
import {Icon} from './Icon';

const Footer = () => {
    return (
        <div className={styles.footerBlock}>
        <div className={`${containerStyle.container} ${styles.footerContainer} `}>

            <div className={styles.test}>
            <h2 className={styles.title}> Socials </h2>
        </div>
            <div className={styles.socials}>
                   <Icon />
                   <Icon />
                   <Icon />
                   <Icon />
            </div>
                </div>
            </div>


    );
};

export default Footer;


