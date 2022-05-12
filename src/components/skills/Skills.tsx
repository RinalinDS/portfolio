import React from 'react';
import styles from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from '../../common/components/title/Title';
import jsIconImage from '../../assets/image/skills/js.svg'
import tsIconImage from '../../assets/image/skills/ts.svg'
import reactIconImage from '../../assets/image/skills/react.svg'
import reduxIconImage from '../../assets/image/skills/redux.svg'
import restIconImage from '../../assets/image/skills/restap.png'
import axiosIconImage from '../../assets/image/skills/axios.svg'
import sassIconImage from '../../assets/image/skills/sass.svg'
import gitIconImage from '../../assets/image/skills/git.svg'
import muiIconImage from '../../assets/image/skills/mui.png'
import htmlIconImage from '../../assets/image/skills/html.svg'
import cssIconImage from '../../assets/image/skills/css3.svg'
import storybookIconImage from '../../assets/image/skills/storybook.svg'
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
  const restIcon = {
    backgroundImage: `url(${restIconImage})`
  }
  const axiosIcon = {
    backgroundImage: `url(${axiosIconImage})`,
  }
  const sassIcon = {
    backgroundImage: `url(${sassIconImage})`,
  }
  const gitIcon = {
    backgroundImage: `url(${gitIconImage})`,
  }
  const htmlIcon = {
    backgroundImage: `url(${htmlIconImage})`,
  }
  const css3Icon = {
    backgroundImage: `url(${cssIconImage})`,
  }
  const muiIcon = {
    backgroundImage: `url(${muiIconImage})`,
  }
  const storybookIcon = {
    backgroundImage: `url(${storybookIconImage})`,
  }
  return (
    <Fade>
      <div className={styles.skillsBlock} id={'skills'}>
        <div className={styles.skillsContainer}>
          <Title text={'Skills'}/>
          <Fade direction={'left'}>
            <div className={styles.skills}>
              <Skill title={'React'}
                     description={''} style={reactIcon}/>
              <Skill title={'Redux'} description={''} style={reduxIcon}/>
              <Skill title={'Javascript'} description={''} style={jsIcon}/>
              <Skill title={'Typescript'} description={''} style={tsIcon}/>

              <Skill title={'Rest API'} description={''} style={restIcon}/>
              <Skill title={'Axios'} description={''} style={axiosIcon}/>
              <Skill title={'Git'} description={''} style={gitIcon}/>
              <Skill title={'Storybook'} description={''} style={storybookIcon}/>

              <Skill title={'HTML 5'} description={''} style={htmlIcon}/>
              <Skill title={'CSS 3'} description={''} style={css3Icon}/>
              <Skill title={'Material UI'} description={''} style={muiIcon}/>
              <Skill title={'SASS'} description={''} style={sassIcon}/>


            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};

