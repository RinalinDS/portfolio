import React from 'react';
import styles from './Project.module.scss'
import {Button} from '../../../common/components/button/button';
import Tilt from 'react-parallax-tilt';

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
      <Tilt tiltEnable={false} scale={1.05}>
        <div className={styles.imgContainer} style={props.style}>
          <Button text={'View'} url={props.siteUrl}/>

        </div>
      </Tilt>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{props.title}</h3>
        <span className={styles.description}>{props.description}</span>
      </div>
    </div>
  );
};

