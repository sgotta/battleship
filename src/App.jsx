import React from 'react';
import {
  BrowserRouter as Router,
  // Link,
  Route,
} from 'react-router-dom';

import StartScreen from './pages/StartScreen';
import './App.css';


function App() {
  return (
    <Router>
      <Route exact path="/" component={StartScreen} />
      {/* <Route exact path="/game-screen" component={GameScreen} /> */}
      {/* <Route exact path="/end-game-screen" component={EndGameScreen} /> */}
    </Router>
  );
}

export default App;
