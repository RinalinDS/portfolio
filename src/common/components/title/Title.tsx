import React, {FC} from 'react';
import styles from './Title.module.css'


export const Title:FC<{text:string}> = ({text}) => {
  return (
    <div className={styles.title}>
      <h2> My <span>{text}</span></h2>
    </div>
  );
};

