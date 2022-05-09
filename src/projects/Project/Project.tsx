import React from 'react';
import styles from './Project.module.scss'
import {Button} from '../../common/components/button/button';

type propsType = {
  title: string
  description: string
  style: {
    backgroundImage: string
  }
  siteUrl: string
}

export const Project = (props: propsType) => {
  return (
    <div className={styles.project}>
      <div className={styles.imgContainer} style={props.style}>
        <Button text={'View'} url={props.siteUrl} />
        {/*<a className={styles.button} href={props.siteUrl} target={'_blank'}>View</a>*/}
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{props.title}</h3>
        <span className={styles.description}>{props.description}</span>
      </div>
    </div>
  );
};

