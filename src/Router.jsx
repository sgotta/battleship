import React from 'react';
import { BrowserRouter as ReactRouter, Route } from 'react-router-dom';

import StartScreen from './pages/StartScreen';
import App from './App';

export default function Router() {
  return (
    <ReactRouter>
      <App>
        <Route exact path="/" component={StartScreen} />
        {/* <Route exact path="/game-screen" component={GameScreen} /> */}
        {/* <Route exact path="/end-game-screen" component={EndGameScreen} /> */}
      </App>
    </ReactRouter>
  );
}
