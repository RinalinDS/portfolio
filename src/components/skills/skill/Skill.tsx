import { FC } from 'react';
import styles from './Skill.module.scss';

type Props = {
  title: string;
  style: {
    backgroundImage: string;
  };
};

export const Skill: FC<Props> = ({ title, style }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.skillContainer}>
        <div className={styles.skillIcon} style={style} />
      </div>

      <div className={styles.skillInfo}>
        <h3 className={styles.skillTitle}>{title}</h3>
      </div>
    </div>
  );
};
