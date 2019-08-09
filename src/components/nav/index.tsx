import React from 'react';
import { Link } from 'react-router-dom';
import GitHubButton from 'react-github-btn';

import { ReactComponent as Logo } from './logo.svg';

import styles from './styles.css';

const Nav = () => (
  <nav className={styles.nav}>
    <Link className={styles.logoLink} to="/">
      <Logo className={styles.logo} />
      <h1 className={styles.logoText}>Helix</h1>
    </Link>
    <GitHubButton
      href="https://github.com/fjlaubscher/helix"
      data-size="large"
      data-show-count
      aria-label="Star fjlaubscher/helix on GitHub"
    >
      Star
    </GitHubButton>
  </nav>
);

export default Nav;
