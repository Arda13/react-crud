import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';


import './App.css';

import Header from './components/Header';
import LandingPage from './components/LandingPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="*" component={NotFound}/>>
        </Switch>
      </main>
      
    </div>
  );
}

export default App;
