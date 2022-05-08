import React from 'react';
import styles from './Main.module.scss';
import containerStyle from './../common/styles/Container.module.css'
import geniusImage from '../assets/image/genius.jpg';

export function Main() {
    const style = {
        backgroundImage: `url(${geniusImage})`
    }
    return (
        <div className={styles.main}>
            <div className={containerStyle.container}>
                <div className={styles.greetings}>
                    <span>Hello there!</span>
                    <h1>I am Denis Pilyutin</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={styles.photo} style={style}>

                </div>

            </div>
        </div>
    );
}

