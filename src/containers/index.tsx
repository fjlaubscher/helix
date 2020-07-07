import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from '../components/loader';
import Layout from '../components/layout';

// lazy loaded containers
const Home = lazy(() => import('./home'));
const Health = lazy(() => import('./health'));
const NotFound = lazy(() => import('./not-found'));

const App = () => (
  <Suspense fallback={<Loader />}>
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/health" component={Health} exact />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Suspense>
);

export default App;
