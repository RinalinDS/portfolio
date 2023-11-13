type CourseT = {
  id: number;
  title: string;
  link: string;
  src: string;
  author: string;
  certificationUrl?: string;
};

export const courses: CourseT[] = [
  {
    id: 1,
    title: 'React testing library',
    link: 'https://www.udemy.com/course/react-testing-library/',
    src: 'Udemy',
    author: 'Bonnie Schulkin',
  },
  {
    id: 7,
    title: 'React Query / TanStack Query: React Server State Management',
    link: 'https://www.udemy.com/course/learn-react-query/',
    src: 'Udemy',
    author: 'Bonnie Schulkin',
  },
  {
    id: 2,
    title: 'React styled components [V5 EDITION]',
    author: 'Unknown',
    link: 'https://www.udemy.com/course/react-styled-components/',
    src: 'Udemy',
  },
  {
    id: 3,
    title: 'The Ultimate React Course 2024: React, Redux & More',
    author: 'Jonas Schmedtmann',
    link: 'https://www.udemy.com/course/the-ultimate-react-course/',
    src: 'Udemy',
  },
  {
    id: 4,
    title: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
    author: 'Jonas Schmedtmann',
    link: 'https://www.udemy.com/course/advanced-css-and-sass/',
    src: 'Udemy',
  },
  {
    id: 5,
    title: 'The Complete JavaScript Course 2024: From Zero to Expert!',
    author: 'Jonas Schmedtmann',
    link: 'https://www.udemy.com/course/the-complete-javascript-course/',
    src: 'Udemy',
  },
  {
    id: 6,
    title: 'Build Responsive Real-World Websites with HTML and CSS',
    author: 'Jonas Schmedtmann',
    link: 'https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/',
    src: 'Udemy',
  },
  {
    id: 8,
    title: 'Understanding TypeScript',
    author: 'Maximilian Schwarzmüller',
    link: 'https://www.udemy.com/course/understanding-typescript/',
    src: 'Udemy',
  },
  {
    id: 9,
    title: 'Продвинутый Frontend В Production на React',
    author: 'Ulbi TV',
    link: 'https://ulbitv.ru/frontend',
    src: 'ulbitv.ru',
  },
  {
    id: 10,
    title: 'JavaScript Algorithms and Data Structures',
    author: 'freecodecamp',
    link: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
    src: 'freecodecamp',
    certificationUrl:
      'https://www.freecodecamp.org/certification/rinalin/javascript-algorithms-and-data-structures',
  },
];
