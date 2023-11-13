import { FC } from 'react';
import styles from './Nav.module.scss';
import { navLinks } from '../constants/navLinks';
import { Link } from './Link/Link';



export const Nav: FC = () => {
    return (
        <ul className={styles.nav}>
            {navLinks.map(link => <Link key={link.id} label={link.label} link={link.link} />)}
        </ul >
    );
}


