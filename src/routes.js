import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Index from './components/containers/index';
import New from './components/containers/new';
import Show from './components/containers/show';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Index} /> // default view within app, base app
    <Route path="posts/new" component={New} />
    <Route path="posts/:id" component={Show} />
  </Route>
);
