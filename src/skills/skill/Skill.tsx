import React from 'react';
import styles from './Skill.module.css'


type propsType = {
    title: string
    description: string
}

export const Skill = (props: propsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}/>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
};

