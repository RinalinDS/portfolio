import React from 'react';
import styles from './Project.module.css'

type propsType = {
  title: string
  description: string
  style: {
    backgroundImage: string
    color: string
  }
  siteUrl: string
}

export const Project = (props: propsType) => {
  return (
    <div className={styles.project}>
      <div className={styles.imgContainer} style={props.style}>
        <a className={styles.button} href={props.siteUrl} target={'_blank'}>View</a>
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{props.title}</h3>


        <span className={styles.description}>{props.description}</span>
      </div>

    </div>
  );
};

