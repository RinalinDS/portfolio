import React from 'react';
import styles from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from '../common/components/title/Title';

export const Skills = () => {
  return (
    <div className={styles.skillsBlock}>
      <div className={styles.skillsContainer}>
        <Title text={'Skills'}/>
        <div className={styles.skills}>
          <Skill title={'HTML/CSS'}
                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae ea eos excepturi expedita incidunt iure minus\n' +
                   '    nam nihil perspiciatis, praesentium provident quam quisquam sequi tempora ullam unde, ut, vero.'}/>
          <Skill title={'JS/TS'} description={'Lorem ipsum tatasdasdqwrq'}/>
          <Skill title={'React'} description={'Lorem ipsum tatasdasdqwrq'}/>

          <Skill title={'React'} description={'Lorem ipsum tatasdasdqwrq'}/>
          <Skill title={'React'} description={'Lorem ipsum tatasdasdqwrq'}/>
          <Skill title={'React'} description={'Lorem ipsum tatasdasdqwrq'}/>

        </div>


      </div>
    </div>
  );
};

