import React from 'react';
import styles from './Main.module.css';
import containerStyle from './../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={styles.main}>
            <div className={containerStyle.container}>
                <div className={styles.greetings}>
                    <span>Hello there</span>
                    <h1>I am Denis Pilyutin</h1>
                    <p>frontend developer</p>
                </div>
                <div className={styles.photo}>

                </div>

            </div>
        </div>
    );
}

