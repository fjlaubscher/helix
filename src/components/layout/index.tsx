import React from 'react';

// components
import Nav from '../nav';

import styles from './styles.css';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Nav />
    <main className={styles.container}>{children}</main>
  </>
);

export default Layout;
