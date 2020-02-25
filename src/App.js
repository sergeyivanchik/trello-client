import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainPage from '../src/components/MainPage';


const App = () => {
  return (
    <Router>
    <div className="router">
      <Route exact path="/" component={MainPage}/>
    </div>
  </Router>
  );
}

export default App;
