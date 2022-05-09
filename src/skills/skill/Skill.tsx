import React, {FC} from 'react';
import styles from './Skill.module.scss'


type SkillPropsType = {
  title: string
  description: string
  style: {
    backgroundImage: string
  }
}

export const Skill: FC<SkillPropsType> = ({title, description, style}) => {
  return (
    <div className={styles.skill}>

      <div className={styles.skillIcon} style={style}>


      </div>
      <div className={styles.skillInfo}>
        <h3 className={styles.skillTitle}>{title}</h3>
        <span className={styles.description}>{description}</span>
      </div>
    </div>
  );
};

