import { FC } from 'react';
import styles from './../Education.module.scss';

type Props = {
  title: string;
  link: string;
  src: string;
  author: string;
  certificationUrl?: string;
};
export const Course: FC<Props> = ({
  title,
  author,
  link,
  src,
  certificationUrl,
}) => {
  return (
    <div className={styles.item}>
      <h4>{title}</h4>
      <div>
        By: {author}, link to <a href={link}>{src}</a>
      </div>
      {certificationUrl && (
        <div>
          <a href={certificationUrl} className={styles.certificate}>
            My certificate
          </a>
        </div>
      )}
    </div>
  );
};
