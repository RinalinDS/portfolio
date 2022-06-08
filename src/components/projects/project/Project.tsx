import React, {FC} from 'react';
import styles from './Project.module.scss'
import {Button} from '../../../common/components/button/button';
import Tilt from 'react-parallax-tilt';

type ProjectPropsType = {
  title: string
  description: string
  tech: string
  style: {
    backgroundImage: string
  }
  siteUrl: string
  githubURL: string
}

export const Project: FC<ProjectPropsType> = ({title, style, description, tech, siteUrl, githubURL}) => {
  return (
    <div className={styles.project}>
      <Tilt tiltEnable={false} scale={1.05}>
        <div className={styles.imgContainer} style={style}>
          <Button text={'View'} url={siteUrl}/>
        </div>
      </Tilt>
      <div className={styles.projectInfo}>
      <h3 className={styles.projectTitle}>{title}  <a href={githubURL} style={{fontSize:'12px'}} target={'_blank'} rel={'nofollow noopener noreferrer'}> link to github</a></h3>
        <span className={styles.description}>{description}</span>
        <div className={styles.technologies}>{tech}</div>
      </div>
    </div>
  );
};

