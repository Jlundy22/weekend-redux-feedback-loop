import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Feeling from './Feeling';
import Understanding from './Understanding';
import Support from './Support';
import Comment from './Comment';

function App() {

  return (

    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <div>
          <Route exact path="/Feeling">
            <Feeling />
          </Route>
          <Route exact path="/Understanding">
            <Understanding />
          </Route>
          <Route exact path="/Support">
            <Support />
          </Route>
          <Route exact path="/Comment">
            <Comment />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
