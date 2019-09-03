import React, {Suspense, lazy} from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLink, faEye, faComment, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faLink, faEye, faComment, faHeart, faTimes);

const MessageMediaBuilder = lazy(() => {
  return import('./containers/MessageMediaBuilder');
});

const App = props => {
  const routes = (
    <Switch>
      <Route path="/" exact component={MessageMediaBuilder} {...props} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </Layout>
  );
};

export default withRouter(App);
