import { FC } from 'react';
import styles from './Nav.module.scss';
import { navLinks } from '../constants/navLinks';
import { Link } from './Link/Link';

export const Nav: FC = () => {
  return (
    <ul className={styles.nav}>
      {navLinks.map(({ id, label, link }) => (
        <Link key={id} label={label} link={link} />
      ))}
    </ul>
  );
};
