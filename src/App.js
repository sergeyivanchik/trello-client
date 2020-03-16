import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.scss'

import MainPage from '../src/components/MainPage';
import CurrentBoard from '../src/components/CurrentBoard';
import Header from '../src/components/Header';
import Snackbar from './components/Snackbar';
import Profile from './components/Profile';


const App = () => {
  const snackbar = useSelector(state => state.snackbar);

  return (
    <Fragment>
      <Router>
        <div className="router">
          <Header/>
          <Snackbar
            type={snackbar.data.type}
            message={snackbar.data.message}
            description={snackbar.data.description}
            isShow={snackbar.isShown}
          />
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/board/:boardId" component={CurrentBoard}/>
            <Route exact path="/:user" component={Profile}/>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
