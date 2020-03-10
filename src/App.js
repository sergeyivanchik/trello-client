import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss'

import MainPage from '../src/components/MainPage';
import CurrentBoard from '../src/components/CurrentBoard';
import Header from '../src/components/Header';


const App = () => {
  const [loginClick, setLoginClick] = useState(false);

  return (
    <Fragment>
      <Router>
        <div className="router">
          <Header click={loginClick} setClick={setLoginClick}/>
          <Switch>
            <Route exact path="/" render={() => <MainPage loginClick={loginClick}/>}/>
            <Route exact path="/board/:boardId" component={CurrentBoard}/>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
