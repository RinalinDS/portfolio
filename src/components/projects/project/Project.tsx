import { FC } from 'react';
import styles from './Project.module.scss';
import { LinkButton } from '../../../common/components/button/button';
import Tilt from 'react-parallax-tilt';

type ProjectPropsType = {
  title: string;
  description: string;
  techStack: string;
  style: {
    backgroundImage: string;
  };
  siteUrl?: string;
  githubURL: string;
};

export const Project: FC<ProjectPropsType> = ({
  title,
  style,
  description,
  techStack,
  siteUrl,
  githubURL,
}) => {
  return (
    <div className={styles.project}>
      <Tilt tiltEnable={false} scale={1.05}>
        <div className={styles.imgContainer} style={style}>
          <LinkButton text={'View'} url={siteUrl || githubURL} />
        </div>
      </Tilt>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>
          {title}
          <a
            href={githubURL}
            target={'_blank'}
            rel={'nofollow noopener noreferrer'}
          >
            link to github
          </a>
        </h3>
        <span className={styles.description}>{description}</span>
        <div className={styles.technologies}>{techStack}</div>
      </div>
    </div>
  );
};
