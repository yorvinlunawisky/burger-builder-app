import React from 'react';
import styles from './Logo.module.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
  <div className={styles.Logo}>
    <img
      alt="burger logo"
      src={burgerLogo} />
  </div>
);
export default logo;