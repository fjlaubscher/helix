import React from 'react';

import Loader from '../../components/loader';

import styles from './styles.scss';

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
        <code className={styles.code}>src/containers/home/home.tsx</code>
      </h1>
      <h2>
        To see how code splitting is done with{' '}
        <code className={styles.code}>React.lazy</code> go look at{' '}
        <code className={styles.code}>src/containers/home/index.tsx</code>
      </h2>
    </div>
    <Loader className={styles.loader} />
  </>
);

export default Home;
