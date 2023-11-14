import { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Title } from '../../common/components/title/Title';
import styles from './Education.module.scss';
import { courses } from './courses';
import { Course } from './Course/Course';
import { Label, Link } from '../header/constants/navLinks';

export const Education: FC = () => {
  return (
    <Fade triggerOnce>
      <div className={styles.educationBlock} id={Link.Education}>
        <div className={styles.container}>
          <Title text={Label.Education} />
          <h3 className={styles.courseTitle}>
            List of additional educational materials I have finished
          </h3>
          <ul className={styles.list}>
            {courses.map(
              ({ id, title, author, link, src, certificationUrl }) => (
                <Course
                  key={id}
                  author={author}
                  title={title}
                  src={src}
                  link={link}
                  certificationUrl={certificationUrl}
                />
              )
            )}
          </ul>
        </div>
      </div>
    </Fade>
  );
};
