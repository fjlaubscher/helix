import React from 'react';
import PropTypes from 'prop-types';

// components
import Nav from '../nav';

import styles from './styles.css';

const Layout = ({ children }) => (
  <>
    <Nav />
    <main className={styles.container}>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
