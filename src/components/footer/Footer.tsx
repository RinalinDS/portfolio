import styles from './Footer.module.scss';
import { Title } from '../../common/components/title/Title';
import { Fade } from 'react-awesome-reveal';
import { socials } from './constants/socials';
import { FC } from 'react';
import { SocialIcon } from './SocialIcon/SocialIcon';
import { Link } from '../header/constants/navLinks';

export const Footer: FC = () => {
  return (
    <Fade triggerOnce>
      <div className={styles.footer} id={Link.Socials}>
        <div className={styles.container}>
          <Title text={'Socials'} />
          <Fade direction={'left'} triggerOnce>
            <div className={styles.socials}>
              {socials.map(({ alt, href, img, id }) => {
                return (
                  <SocialIcon key={id} altText={alt} href={href} img={img} />
                );
              })}
            </div>
          </Fade>
          <span className={styles.copyright}>
            2024 All Rights Reserved &copy;
          </span>
        </div>
      </div>
    </Fade>
  );
};
