import React from 'react';

import Loader from '../../components/loader';

import styles from './styles.css';

const Home = () => (
  <>
    <div className={styles.grid}>
      <div className={styles.column}>
        <h1 className={styles.heading}>What is Helix?</h1>
        <p className={styles.text}>
          <span className={styles.keyword}>Helix</span> is an opinionated{' '}
          <span className={styles.keyword}>React</span> boilerplate which tries
          to keep config to a minimum while allowing you to configure whatever
          you need.
        </p>
      </div>
      <div className={styles.column}>
        <h1 className={styles.heading}>What does it do?</h1>
        <ul className={styles.features}>
          <li>
            <span role="img" aria-label="config">
              ⚙️
            </span>
            Minimal and accessible config
          </li>
          <li>
            <span role="img" aria-label="hmr">
              ♻️
            </span>
            HMR (Hot Module Replacement)
          </li>
          <li>
            <span role="img" aria-label="code splitting">
              🤸‍♀️
            </span>
            Code Splitting using React.lazy
          </li>
          <li>
            <span role="img" aria-label="typescript">
              👨‍💻
            </span>
            TypeScript
          </li>
          <li>
            <span role="img" aria-label="css modules">
              📚
            </span>
            CSS Modules
          </li>
          <li>
            <span role="img" aria-label="pwa">
              📱
            </span>
            PWA ready
          </li>
          <li>
            <span role="img" aria-label="fast">
              🏎
            </span>
            Pre-render HTML using react-snap
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h1 className={styles.heading}>Why Helix and not create-react-app?</h1>
        <p className={styles.text}>
          <span className={styles.keyword}>create-react-app</span> suits most,
          if not all, needs when it comes to bootstrapping{' '}
          <span className={styles.keyword}>React</span> apps and has a massive
          community supporting it.
          <br />
          <span className={styles.keyword}>Helix</span> is something a lot more
          niche, allowing power-users to tweak anything to their needs while
          providing a simple and clean foundation.
          <br />
          <br />
          Don&apos;t like CSS modules and want something else?
          <br />
          <strong>You can change it.</strong>
        </p>
      </div>
    </div>
    <div className={styles.info}>
      <h1>
        Get started by editing{' '}
        <span className={styles.code}>src/containers/home/home.tsx</span>
      </h1>
      <h2>
        To see how code splitting is done with{' '}
        <span className={styles.code}>React.lazy</span> go look at{' '}
        <span className={styles.code}>src/containers/home/index.tsx</span>
      </h2>
    </div>
    <Loader className={styles.loader} />
  </>
);

export default Home;
