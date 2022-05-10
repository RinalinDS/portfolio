import React from 'react';
import styles from './Header.module.scss';
import {Nav} from "./nav/Nav";

export function Header() {
    return (
        <div className={styles.header} id={'home'}>
            <Nav/>
        </div>
    );
}

