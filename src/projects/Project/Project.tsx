import React from 'react';
import styles from './Project.module.css'

type propsType = {
    title: string
    description: string
}

export const Project = (props: propsType) => {
    return (
        <div className={styles.project}>
            <div className={styles.imgContainer}>


                    <span className={styles.button}>l123</span>


            </div>
            <div className={styles.title}>
                <h3>{props.title}</h3>
            </div>
            <div className={styles.text}>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    );
};

