import React from 'react';
import styles from './Skills.module.css'
import containerStyle from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${containerStyle.container} ${styles.skillsContainer}`}>
                <div className={styles.test}>
                    <h2 className={styles.title}> Skills </h2>
                </div>
                <div className={styles.skills}>
                    <Skill title={'HTML/CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae ea eos excepturi expedita incidunt iure minus\n' +
                               '    nam nihil perspiciatis, praesentium provident quam quisquam sequi tempora ullam unde, ut, vero.'}/>
                    <Skill title={'JS/TS'} description={'Lorem ipsum tatasdasdqwrq'}/>
                    <Skill title={'React'} description={'Lorem ipsum tatasdasdqwrq'}/>
                    <div className={styles.skills}>
                        <Skill title={'React'} description={'Lorem ipsum tatasdasdqwrq'}/>
                        <Skill title={'React'} description={'Lorem ipsum tatasdasdqwrq'}/>
                    </div>
                </div>


            </div>
        </div>
    );
};

