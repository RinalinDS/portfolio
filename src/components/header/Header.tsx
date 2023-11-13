import { FC } from 'react';
import styles from './Header.module.scss';
import { Nav } from "./nav/Nav";

export const Header: FC = () => {
    return (
        <div className={styles.header} id={'home'}>
            <Nav />
        </div>
    );
}

