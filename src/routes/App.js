import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Main from '../pages/Main';

import '../assets/styles/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Main} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
