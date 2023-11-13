import styles from './Footer.module.scss'
import { Title } from '../../common/components/title/Title';
import { Fade } from 'react-awesome-reveal';
import { socials } from './constants/socials';
import { FC } from 'react';


export const Footer: FC = () => {
  return (
    <Fade >
      <div className={styles.footer} id={'socials'}>
        <div className={styles.container}>
          <Title text={'Socials'} />
          <Fade direction={'left'}>
            <div className={styles.socials}>

              {socials.map(social => {
                return (
                  <div className={styles.icon}>
                    <a href={social.href} target={'_blank'} rel='noreferrer'><img src={social.img} alt={social.alt} /></a>
                  </div>
                )
              })}

            </div>
          </Fade>
          <span className={styles.copyright}>2024 All Rights Reserved &copy;</span>
        </div>
      </div>
    </Fade>
  );
};



