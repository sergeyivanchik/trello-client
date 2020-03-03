import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss'

import MainPage from '../src/components/MainPage';
import CurrentBoard from '../src/components/CurrentBoard';
import Header from '../src/components/Header';


const App = () => {
  return (
    <Fragment>
      <Router>
        <div className="router">
          <Header/>
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/board/:boardId" component={CurrentBoard}/>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
