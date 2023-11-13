import { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Title } from '../../common/components/title/Title';
import styles from './Education.module.scss';
import { courses } from './courses';
import { Course } from './Course/Course';

export const Education: FC = () => {
  return (
    <Fade triggerOnce>
      <div className={styles.educationBlock} id={'education'}>
        <div className={styles.container}>
          <Title text={'Education'} />
          <h3 className={styles.courseTitle}>
            List of additional educational material i have finished
          </h3>
          <div className={styles.list}>
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
          </div>
        </div>
      </div>
    </Fade>
  );
};
