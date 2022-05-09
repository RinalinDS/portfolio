import React, {FC} from 'react';
import styles from './Projects.module.scss'
import {Project} from "./Project/Project";
import {Title} from '../common/components/title/Title';
import socialImage from './../assets/image/social.jpg'
import todolistImage from './../assets/image/todolist.jpg'

export const Projects: FC = () => {
  const socialNetworkStyle = {
    backgroundImage: `url(${socialImage})`
  }
  const todolistStyle = {
    backgroundImage: `url(${todolistImage})`
  }
  return (
    <div className={styles.projectsBlock} id={'projects'}>
      <div className={styles.projectsContainer}>
        <Title text={'Projects'}/>
        <div className={styles.projects}>
          <Project siteUrl={'https://rinalinds.github.io/mytodolist'} style={todolistStyle} title={'TODOLIST'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus non obcaecati porro velit? Aliquam, culpa.'}/>
          <Project siteUrl={'https://rinalinds.github.io/socialnetwork'} style={socialNetworkStyle}
                   title={'SOCIAL NETWORK'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus non obcaecati porro velit? Aliquam, culpa.'}/>
        </div>
      </div>
    </div>
  );
};


