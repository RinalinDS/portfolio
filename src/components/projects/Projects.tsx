import { FC } from 'react';
import styles from './Projects.module.scss';
import { Project } from './project/Project';
import { Title } from '../../common/components/title/Title';
import { Fade } from 'react-awesome-reveal';
import { projects } from './contants/projects';

export const Projects: FC = () => {
  return (
    <Fade triggerOnce>
      <div className={styles.projectsBlock} id={'projects'}>
        <div className={styles.projectsContainer}>
          <Title text={'Projects'} />
          <div className={styles.projects}>
            {projects.map(
              ({
                description,
                githubURL,
                style,
                techStack,
                title,
                siteURL,
              }) => {
                return (
                  <Project
                    description={description}
                    githubURL={githubURL}
                    style={style}
                    techStack={techStack}
                    title={title}
                    siteUrl={siteURL}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};
