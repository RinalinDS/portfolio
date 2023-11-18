// import socialImage from '../../../assets/image/projects/social.jpg';
// import todolistImage from '../../../assets/image/projects/todolist.jpg';
import cardsImage from '../../../assets/image/projects/cards.jpg';
import weatherImage from '../../../assets/image/projects/weather.jpg';
import trelloImage from '../../../assets/image/projects/trello.jpg';

export enum Project {
  trello = 'Trello application',
  weather = 'Weather application',
  cards = 'Learning cards',
  // todolist = 'Todolist application',
  // socialNetwork = 'Social network',
}

type ProjectDetails = {
  [key in Project]: {
    techStack: string;
    description: string;
    style: {
      backgroundImage: string;
    };
  };
};
type ProjectType = {
  id: number;
  githubURL: string;
  siteURL: string;
  style: {
    backgroundImage: string;
  };
  title: Project;
  description: string;
  techStack: string;
};

const projectDetails: ProjectDetails = {
  [Project.trello]: {
    techStack:
      'Technologies: Server Tech Stack: JSON Server for creating a mock REST API server. \n' +
      'Client Tech Stack: TypeScript, React, Axios, React-Router-DOM, Redux Toolkit, Redux Saga, Styled Components, Formik, Yup,MUI,Eslint, Prettier',
    description: `In this application, I've created a simple and budget-friendly version of Trello.
        Key Features:
            Boards:
                Add and delete boards effortlessly.
            Cards:
                Create, edit, and delete cards to encapsulate your tasks.
            Tasks:
                Add, edit, and delete individual tasks associated with your cards.
            Task Descriptions:
                Click on tasks to include detailed descriptions.`,
    style: {
      backgroundImage: `url(${trelloImage})`,
    },
  },
  [Project.cards]: {
    techStack:
      'Technologies: JavaScript, TypeScript, React, Redux Toolkit, Redux-saga, ' +
      'Axios, SCSS, ESLint, Prettier, Formik',
    description:
      'SPA for learning by cards. Implemented: login page with validation; ' +
      'register page with validation; reset password page with validation; ' +
      '404 page; profile page with abilities to: edit your profile information (change avatar and nickname), ' +
      'add a new card pack and edit, search, sort, view, remove and learn your card packs; ' +
      'packs list page with abilities to: search, sort, view and learn any card packs; learn page with abilities ' +
      'to answer a question and evaluate your answer.',
    style: {
      backgroundImage: `url(${cardsImage})`,
    },
  },
  [Project.weather]: {
    techStack:
      'Technologies: JavaScript, TypeScript, React, React-routed-dom v6, Redux Toolkit, Redux-thunk, ' +
      'Axios, Material UI, ESLint, Prettier',
    description:
      'SPA for checking weather forecast. Implemented: work with local storage to update/delete city list,' +
      'make forecast request with axios for every city in List. Based on previous response make another request to 2nd API to get detailed info about country where city is located ' +
      "Every card in list is linked to detailed information about today's city weather",
    style: {
      backgroundImage: `url(${weatherImage})`,
    },
  },
  //   [Project.todolist]: {
  //     techStack:
  //       ' Technologies: JavaScript, TypeScript, React, Redux, Redux-Thunk Material UI, SCSS, Formik',
  //     description: `SPA for managing to-do lists and their items.
  // Implemented: add todolist / task, remove todolist / task,
  // rename todolist / task, marking the completed task, displaying all / active / confirmed tasks in todolist.`,
  //     style: {
  //       backgroundImage: `url(${todolistImage})`,
  //     },
  //   },
  //   [Project.socialNetwork]: {
  //     description:
  //       'SPA for social actions - messaging and blogging. Implemented: ' +
  //       'login page with validation, error displaying and captcha; 404 page;' +
  //       ' profile page with abilities to: view the information of the selected user, edit your profile information, ' +
  //       'change avatar, add a new post and view your published posts; ' +
  //       'dialogs page with the ability to send a message; users page and friends page with abilities to: ' +
  //       'view the list of users using pagination, subscribe and unsubscribe to any user, view any user profile.',
  //     style: {
  //       backgroundImage: `url(${socialImage})`,
  //     },
  //     techStack:
  //       'Technologies: JavaScript, TypeScript, React, Redux, Redux-thunk, Redux-form, Axios',
  //   },
};

export const projects: ProjectType[] = [
  {
    id: 4,
    githubURL: 'https://github.com/RinalinDS/weatherapp',
    siteURL: 'https://rinalinds.github.io/weatherapp/',
    style: projectDetails[Project.weather].style,
    title: Project.weather,
    description: projectDetails[Project.weather].description,
    techStack: projectDetails[Project.weather].techStack,
  },
  {
    id: 5,
    githubURL: 'https://github.com/RinalinDS/analogtrello',
    siteURL: '',
    style: projectDetails[Project.trello].style,
    title: Project.trello,
    description: projectDetails[Project.trello].description,
    techStack: projectDetails[Project.trello].techStack,
  },

  {
    id: 3,
    githubURL: 'https://github.com/RinalinDS/learning_cards',
    siteURL: 'https://rinalinds.github.io/learning_cards',
    style: projectDetails[Project.cards].style,
    title: Project.cards,
    description: projectDetails[Project.cards].description,
    techStack: projectDetails[Project.cards].techStack,
  },
  // {
  //   id: 1,
  //   githubURL: 'https://github.com/RinalinDS/mytodolist',
  //   siteURL: 'https://rinalinds.github.io/mytodolist',
  //   style: projectDetails[Project.todolist].style,
  //   title: Project.todolist,
  //   description: projectDetails[Project.todolist].description,
  //   techStack: projectDetails[Project.todolist].techStack,
  // },
  // {
  //   id: 2,
  //   githubURL: 'https://github.com/RinalinDS/socialnetwork',
  //   siteURL: 'https://rinalinds.github.io/socialnetwork',
  //   style: projectDetails[Project.socialNetwork].style,
  //   title: Project.socialNetwork,
  //   description: projectDetails[Project.socialNetwork].description,
  //   techStack: projectDetails[Project.socialNetwork].techStack,
  // },
];
