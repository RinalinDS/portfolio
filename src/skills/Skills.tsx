import React from 'react';
import styles from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from '../common/components/title/Title';
import jsIconImage from '../assets/image/skills/js.svg'
import tsIconImage from '../assets/image/skills/ts.svg'
import reactIconImage from '../assets/image/skills/react.svg'
import reduxIconImage from '../assets/image/skills/redux.svg'



export const Skills = () => {
  const reactIcon = {
    backgroundImage: `url(${reactIconImage})`
  }
  const reduxIcon = {
    backgroundImage: `url(${reduxIconImage})`
  }
  const jsIcon = {
    backgroundImage: `url(${jsIconImage})`
  }
  const tsIcon = {
    backgroundImage: `url(${tsIconImage})`
  }
  return (
    <div className={styles.skillsBlock} id={'skills'}>
      <div className={styles.skillsContainer}>
        <Title text={'Skills'}/>
        <div className={styles.skills}>
          <Skill title={'HTML/CSS'}
                 description={'Lorem ipsum dolor sit amet, unde, ut'} style={reactIcon}/>
          <Skill title={'JS/TS'} description={'Lorem ipsum tatasdasdqwrq'} style={reduxIcon}/>
          <Skill title={'React'} description={'Lorem ipsum tatasdasdqwrq'} style={jsIcon}/>
          <Skill title={'React'} description={'Lorem ipsum tatasdasdqwrq'} style={tsIcon}/>

        </div>
      </div>
    </div>
  );
};

