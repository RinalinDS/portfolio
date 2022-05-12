import React, {FC} from 'react';
import styles from './Projects.module.scss'
import {Project} from "./project/Project";
import {Title} from '../../common/components/title/Title';
import socialImage from '../../assets/image/social.jpg'
import todolistImage from '../../assets/image/todolist.jpg'
import cardsImage from '../../assets/image/cards.jpg'
import {Fade} from 'react-awesome-reveal';


const cardProjectDescription = 'SPA for learning by cards. Implemented: login page with validation; ' +
  'register page with validation; reset password page with validation; ' +
  '404 page; profile page with abilities to: edit your profile information (change avatar and nickname), ' +
  'add a new card pack and edit, search, sort, view, remove and learn your card packs; ' +
  'packs list page with abilities to: search, sort, view and learn any card packs; learn page with abilities ' +
  'to answer a question and evaluate your answer.'
const cardsProjectTech = 'Technologies: JavaScript, TypeScript, React, Redux Toolkit, Redux-saga, ' +
  'Axios, SCSS, ESLint, Prettier, Formik'

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
  return (
    <Fade>
      <div className={styles.projectsBlock} id={'projects'}>
        <div className={styles.projectsContainer}>
          <Title text={'Projects'}/>
          <div className={styles.projects}>
            <Project siteUrl={'https://rinalinds.github.io/mytodolist'} style={todolistStyle} title={'TODOLIST'}
                     description={todolistProjectDescription} tech={todolistProjectTech}/>
            <Project siteUrl={'https://rinalinds.github.io/socialnetwork'} style={socialNetworkStyle}
                     title={'SOCIAL NETWORK'}
                     description={socialNetworkProjectDescription} tech={socialNetworkProjectTech}/>
            <Project siteUrl={'https://theidiet.github.io/group_projest/#/'} style={cardsStyle}
                     title={'Learning Cards'}
                     description={cardProjectDescription} tech={cardsProjectTech}/>
          </div>
        </div>
      </div>
    </Fade>
  );
};


