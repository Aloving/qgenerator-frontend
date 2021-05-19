import React from 'react';

import styles from './Header.module.css';

import {
  LogoContainer,
  LangSwitcherContainer,
  ThemeSwitcherContainer,
} from '../../containers';

export const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <LogoContainer />
      <div className={styles.tools}>
        <LangSwitcherContainer />
        <ThemeSwitcherContainer />
      </div>
    </div>
  );
};
