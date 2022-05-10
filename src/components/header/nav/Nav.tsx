import React from 'react';
import styles from './Nav.module.scss';

export function Nav() {
    return (
        <div className={styles.nav}>
            <a href="#main">Main</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contacts</a>
            <a href="#socials">Socials</a>
        </div>
    );
}

