import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StartScreen from './pages/StartScreen';
import './App.css';


function App() {
  return (
    <MuiThemeProvider>
      <Router>
        <Route exact path="/" component={StartScreen} />
        {/* <Route exact path="/game-screen" component={GameScreen} /> */}
        {/* <Route exact path="/end-game-screen" component={EndGameScreen} /> */}
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
