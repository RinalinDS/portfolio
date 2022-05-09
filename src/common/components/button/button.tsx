import React, {FC} from 'react';
import styles from './button.module.scss'

type ButtonPropsType = {
  text: string
  url: string
}

export const Button: FC<ButtonPropsType> = ({url, text}) => {
  return (
    <a className={styles.button} href={url} target={'_blank'}>{text}</a>
  );
};

