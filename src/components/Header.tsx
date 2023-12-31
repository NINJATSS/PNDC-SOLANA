import React from 'react';
import { NavButton } from './Button';
import styles from './Header.module.css';
import { FaDiscord, FaTwitter, FaGlobeAmericas} from 'react-icons/fa';

export const Header: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <NavButton variant="ghost" className={styles.logo} to="/">
            <img src="/logo-2.svg" height="20px" alt="Logo" />
            <span className={styles.title}>PNDC</span>
          </NavButton>
          <div className={styles.iconContainer}>
            <a href="https://twitter.com/Kingsol_69" target="_blank" rel="noreferrer" className={styles.icon}>
              <FaTwitter />
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};