import React from 'react';
import styles from './Footer.module.scss'
import {Title} from '../../common/components/title/Title';
import tg from '../../assets/image/socials/tg.svg'
import cw from '../../assets/image/socials/cw.svg'
import gh from '../../assets/image/socials/gh.svg'
import link from '../../assets/image/socials/link.svg'
import { Fade } from 'react-awesome-reveal';




const Footer = () => {
  return (
    <Fade >
      <div className={styles.footer} id={'socials'}>
        <div className={styles.container}>
          <Title text={'Socials'}/>
          <Fade direction={'left'}>
          <div className={styles.socials}>

            <div className={styles.icon}>
              <a href="https://t.me/RinalinDS" target={'_blank'}><img src={tg} alt="tgIcon"/></a>
            </div>
            <div className={styles.icon}>
              <a href="https://www.linkedin.com/in/denis-pilyutin-647514197/" target={'_blank'}><img src={link}
                                                                                                     alt="linkedinIcon"/></a>
            </div>
            <div className={styles.icon}>
              <a href="https://github.com/RinalinDS" target={'_blank'}><img src={gh} alt="tgIcon"/></a>
            </div>
            <div className={styles.icon}>
              <a href="https://www.codewars.com/users/RinalinDS" target={'_blank'}><img src={cw}
                                                                                        alt="codewarsIcon"/></a>
            </div>


          </div>
          </Fade>

          <span className={styles.copyright}>2022 All Rights Reserved Kappa</span>
        </div>
      </div>
    </Fade>


  );
};

export default Footer;


