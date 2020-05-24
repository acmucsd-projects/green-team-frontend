import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../NavBar';
import About from '../../pages/About/About';
import Home from '../../pages/Home/Home';
import TreeHome from '../../pages/TreeHome/TreeHome';
import Leaderboard from '../../pages/Leaderboard/Leaderboard';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="/treehome">
            <TreeHome />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
