import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.scss'

import logo from './components/MainPage/icons/logo.svg';
import MainPage from '../src/components/MainPage';
import CurrentBoard from '../src/components/CurrentBoard';


const App = () => {
  const [mouseOverOnLogo, setMouseOverOnLogo] = useState(false);

  return (
    <Fragment>
      <Router>
        <div className="router">
          <div className="router__header">
            <Link to={'/'}>
              <img
                src={logo}
                alt='logo'
                className={`router__logo ${mouseOverOnLogo ? 'router__logo_hover' : ''}`}
                onMouseOver={() => setMouseOverOnLogo(true)}
                onMouseLeave={()=> setMouseOverOnLogo(false)}
              />
            </Link>
          </div>
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
