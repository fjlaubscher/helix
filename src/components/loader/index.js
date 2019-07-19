import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ReactComponent as Logo } from '../nav/logo.svg';

import styles from './styles.css';

const Loader = ({ className }) => (
  <Logo className={classnames(styles.logo, styles.animating, className)} />
);

Loader.propTypes = {
  className: PropTypes.string
};

Loader.defaultProps = {
  className: null
};

export default Loader;
