import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Main from '../pages/Main';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
