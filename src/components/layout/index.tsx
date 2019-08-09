import React, { ReactNode } from 'react';

// components
import Nav from '../nav';

import styles from './styles.css';

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Nav />
    <main className={styles.container}>{children}</main>
  </>
);

export default Layout;
