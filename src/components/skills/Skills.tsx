import React from 'react';
import styles from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from '../../common/components/title/Title';
import jsIconImage from '../../assets/image/skills/js.svg'
import tsIconImage from '../../assets/image/skills/ts.svg'
import reactIconImage from '../../assets/image/skills/react.svg'
import reduxIconImage from '../../assets/image/skills/redux.svg'
import {Fade} from 'react-awesome-reveal';


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
    <Fade>
      <div className={styles.skillsBlock} id={'skills'}>
        <div className={styles.skillsContainer}>
          <Title text={'Skills'}/>
          <Fade direction={'left'}>
            <div className={styles.skills}>
              <Skill title={'React'}
                     description={'React hooks, functional and class components, creating SPA, TDD/Jest/Storybook'} style={reactIcon}/>
              <Skill title={'Redux'} description={'Redux Thunk, Redux Saga, Redux Toolkit'} style={reduxIcon}/>
              <Skill title={'Javascript'} description={'JavaScript ES6+'} style={jsIcon}/>
              <Skill title={'Typescript'} description={'All my projects made with Typescript'} style={tsIcon}/>

            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};

