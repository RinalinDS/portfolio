import jsIconImage from '../../../assets/image/skills/js.svg';
import tsIconImage from '../../../assets/image/skills/ts.svg';
import reactIconImage from '../../../assets/image/skills/react.svg';
import reduxIconImage from '../../../assets/image/skills/redux.svg';
import restIconImage from '../../../assets/image/skills/restap.png';
import sassIconImage from '../../../assets/image/skills/sass.svg';
import gitIconImage from '../../../assets/image/skills/git.svg';
import muiIconImage from '../../../assets/image/skills/mui.png';

import storybookIconImage from '../../../assets/image/skills/storybook.svg';
import reactquery from '../../../assets/image/skills/rquery.svg';
import graphQL from '../../../assets/image/skills/graphql.svg';
import formik from '../../../assets/image/skills/formik.jpg';
import jest from '../../../assets/image/skills/jest.png';
import reacthookForm from '../../../assets/image/skills/react-hook-form.png';
import reactRouterDom from '../../../assets/image/skills/rrd.png';

enum Skill {
  JavaScript = 'JavaScript',
  TypeScript = 'TypeScript',
  React = 'React',
  Redux = 'Redux',
  RTKQ = 'Redux Toolkit + Query',
  ReactQuery = 'React Query',
  ReactRouter = 'React Router',
  MUI = 'Material UI',
  SASS = 'SASS',
  GraphQL = 'GraphQL',
  REST = 'Rest API',
  Git = 'Git',
  Storybook = 'Storybook',
  JEST = 'JEST',
  ReactHookForm = 'React-hook-form',
  Formik = 'Formik',
}

const skillDetails = {
  [Skill.JavaScript]: {
    style: {
      backgroundImage: `url(${jsIconImage})`,
    },
  },
  [Skill.TypeScript]: {
    style: {
      backgroundImage: `url(${tsIconImage})`,
    },
  },
  [Skill.React]: {
    style: {
      backgroundImage: `url(${reactIconImage})`,
    },
  },
  [Skill.Redux]: {
    style: {
      backgroundImage: `url(${reduxIconImage})`,
    },
  },
  [Skill.RTKQ]: {
    style: {
      backgroundImage: `url(${reduxIconImage})`,
    },
  },
  [Skill.ReactQuery]: {
    style: {
      backgroundImage: `url(${reactquery})`,
    },
  },
  [Skill.ReactRouter]: {
    style: {
      backgroundImage: `url(${reactRouterDom})`,
    },
  },
  [Skill.MUI]: {
    style: {
      backgroundImage: `url(${muiIconImage})`,
    },
  },
  [Skill.SASS]: {
    style: {
      backgroundImage: `url(${sassIconImage})`,
    },
  },
  [Skill.GraphQL]: {
    style: {
      backgroundImage: `url(${graphQL})`,
    },
  },
  [Skill.REST]: {
    style: {
      backgroundImage: `url(${restIconImage})`,
    },
  },
  [Skill.Git]: {
    style: {
      backgroundImage: `url(${gitIconImage})`,
    },
  },
  [Skill.Storybook]: {
    style: {
      backgroundImage: `url(${storybookIconImage})`,
    },
  },
  [Skill.JEST]: {
    style: {
      backgroundImage: `url(${jest})`,
    },
  },
  [Skill.Formik]: {
    style: {
      backgroundImage: `url(${formik})`,
    },
  },
  [Skill.ReactHookForm]: {
    style: {
      backgroundImage: `url(${reacthookForm})`,
    },
  },
};

export const skills = [
  {
    id: 1,
    title: Skill.JavaScript,
    style: skillDetails[Skill.JavaScript].style,
  },
  {
    id: 2,
    title: Skill.TypeScript,
    style: skillDetails[Skill.TypeScript].style,
  },
  { id: 3, title: Skill.React, style: skillDetails[Skill.React].style },
  { id: 4, title: Skill.Redux, style: skillDetails[Skill.Redux].style },
  { id: 5, title: Skill.RTKQ, style: skillDetails[Skill.RTKQ].style },
  {
    id: 6,
    title: Skill.ReactQuery,
    style: skillDetails[Skill.ReactQuery].style,
  },
  {
    id: 7,
    title: Skill.ReactRouter,
    style: skillDetails[Skill.ReactRouter].style,
  },
  { id: 8, title: Skill.MUI, style: skillDetails[Skill.MUI].style },
  { id: 9, title: Skill.SASS, style: skillDetails[Skill.SASS].style },
  { id: 10, title: Skill.GraphQL, style: skillDetails[Skill.GraphQL].style },
  { id: 11, title: Skill.REST, style: skillDetails[Skill.REST].style },
  { id: 12, title: Skill.Git, style: skillDetails[Skill.Git].style },
  {
    id: 13,
    title: Skill.Storybook,
    style: skillDetails[Skill.Storybook].style,
  },
  {
    id: 14,
    title: Skill.JEST,
    style: skillDetails[Skill.JEST].style,
  },
  {
    id: 15,
    title: Skill.Formik,
    style: skillDetails[Skill.Formik].style,
  },
  {
    id: 16,
    title: Skill.ReactHookForm,
    style: skillDetails[Skill.ReactHookForm].style,
  },
];
