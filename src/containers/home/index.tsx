import React, { Suspense, lazy } from 'react';

import Loader from '../../components/loader';

const Home = lazy(() => import('./home'));

const LazyHome = (props: JSX.IntrinsicAttributes) => (
  <Suspense fallback={<Loader />}>
    <Home {...props} />
  </Suspense>
);

export default LazyHome;
