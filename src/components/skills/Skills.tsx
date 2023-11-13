import styles from './Skills.module.scss';
import { Skill } from './skill/Skill';
import { Title } from '../../common/components/title/Title';

import { Fade } from 'react-awesome-reveal';
import { FC } from 'react';
import { skills } from './constants/skills';
import { Link, Label } from '../header/constants/navLinks';

export const Skills: FC = () => {
  return (
    <Fade triggerOnce>
      <div className={styles.skillsBlock} id={Link.Skills}>
        <div className={styles.skillsContainer}>
          <Title text={Label.Skills} />
          <Fade direction={'left'} triggerOnce>
            <div className={styles.skills}>
              {skills.map(({ id, title, style }) => (
                <Skill key={id} title={title} style={style} />
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};
