import React, {FC} from 'react';
import styles from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from '../../common/components/title/Title';
import socialImage from '../../assets/image/social.jpg'
import todolistImage from '../../assets/image/todolist.jpg'
import cardsImage from '../../assets/image/cards.jpg'
import weatherImage from '../../assets/image/weather.jpg'
import {Fade} from 'react-awesome-reveal';


const cardProjectDescription = 'SPA for learning by cards. Implemented: login page with validation; ' +
  'register page with validation; reset password page with validation; ' +
  '404 page; profile page with abilities to: edit your profile information (change avatar and nickname), ' +
  'add a new card pack and edit, search, sort, view, remove and learn your card packs; ' +
  'packs list page with abilities to: search, sort, view and learn any card packs; learn page with abilities ' +
  'to answer a question and evaluate your answer.'
const cardsProjectTech = 'Technologies: JavaScript, TypeScript, React, Redux Toolkit, Redux-saga, ' +
  'Axios, SCSS, ESLint, Prettier, Formik'

const weatherProjectDescription = 'SPA for checking weather forecast. Implemented: work with local storage to update/delete city list,' +
  'make forecast request with axios for every city in List. Based on previous response make another request to 2nd API to get detailed info about country where city is located ' +
  'Every card in list is linked to detailed information about today\'s city weather'
const weatherProjectTech = 'Technologies: JavaScript, TypeScript, React, React-routed-dom v6, Redux Toolkit, Redux-thunk, ' +
  'Axios, Material UI, ESLint, Prettier'

const socialNetworkProjectDescription = 'SPA for social actions - messaging and blogging. Implemented: ' +
  'login page with validation, error displaying and captcha; 404 page;' +
  ' profile page with abilities to: view the information of the selected user, edit your profile information, ' +
  'change avatar, add a new post and view your published posts; ' +
  'dialogs page with the ability to send a message; users page and friends page with abilities to: ' +
  'view the list of users using pagination, subscribe and unsubscribe to any user, view any user profile.'
const socialNetworkProjectTech = 'Technologies: JavaScript, TypeScript, React, Redux, Redux-thunk, Redux-form, Axios'

const todolistProjectDescription = 'SPA for managing to-do lists and their items. ' +
  'Implemented: add todolist / task, remove todolist / task,' +
  ' rename todolist / task, marking the completed task, displaying all / active / confirmed tasks in todolist.'
const todolistProjectTech = ' Technologies: JavaScript, TypeScript, React, Redux, Redux-Thunk Material UI, SCSS, Formik'

export const Projects: FC = () => {
  const socialNetworkStyle = {
    backgroundImage: `url(${socialImage})`
  }
  const todolistStyle = {
    backgroundImage: `url(${todolistImage})`
  }

  const cardsStyle = {
    backgroundImage: `url(${cardsImage})`
  }
  const weatherStyle = {
    backgroundImage: `url(${weatherImage})`
  }
  return (
    <Fade>
      <div className={styles.projectsBlock} id={'projects'}>
        <div className={styles.projectsContainer}>
          <Title text={'Projects'}/>
          <div className={styles.projects}>
            <Project githubURL={'https://github.com/RinalinDS/mytodolist'} siteUrl={'https://rinalinds.github.io/mytodolist'} style={todolistStyle} title={'TODOLIST'}
                     description={todolistProjectDescription} tech={todolistProjectTech}/>
            <Project githubURL={'https://github.com/RinalinDS/socialnetwork'} siteUrl={'https://rinalinds.github.io/socialnetwork'} style={socialNetworkStyle}
                     title={'SOCIAL NETWORK'}
                     description={socialNetworkProjectDescription} tech={socialNetworkProjectTech}/>
            <Project githubURL={'https://github.com/RinalinDS/learning_cards'} siteUrl={'https://rinalinds.github.io/learning_cards'} style={cardsStyle}
                     title={'Learning Cards'}
                     description={cardProjectDescription} tech={cardsProjectTech}/>
            <Project githubURL={'https://github.com/RinalinDS/weatherapp'} siteUrl={'https://rinalinds.github.io/weatherapp/#/'} style={weatherStyle}
                     title={'Weather App'}
                     description={weatherProjectDescription} tech={weatherProjectTech}/>
          </div>
        </div>
      </div>
    </Fade>
  );
};

