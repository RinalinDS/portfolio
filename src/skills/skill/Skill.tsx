import React from 'react';
import styles from './Skill.module.scss'


type propsType = {
    title: string
    description: string
}

export const Skill = (props: propsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.skillIcon}/>
          <div className={styles.skillInfo}>
            <h3 className={styles.skillTitle}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
          </div>
        </div>
    );
};

