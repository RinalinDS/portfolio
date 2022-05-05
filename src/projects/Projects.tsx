import React from 'react';
import styles from './Projects.module.css'
import containerStyle from './../common/styles/Container.module.css'
import {Project} from "./Project/Project";


export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${containerStyle.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}> Projects </h2>
                <div className={styles.projects}>
                    <Project title={'TODOLIST'} description={'Lorem ipsum dolor sit amet.'}/>
                    <Project title={'SOCIAL NETWORK'} description={'Lorem ipsum dolor sit.'}/>
                </div>

            </div>
        </div>
    );
};

