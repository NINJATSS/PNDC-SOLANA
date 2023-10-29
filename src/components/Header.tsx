import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <NavLink className={styles.logo} to="/">
            <img alt="PNDC logo" src="/logo-2.svg" />
          </NavLink>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div className={styles.externalLinks}>
            <a href="https://twitter.com/Kingsol_69" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://explorer.gamba.so" target="_blank" rel="noreferrer">
              
            </a>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
