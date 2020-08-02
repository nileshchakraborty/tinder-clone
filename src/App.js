import React from 'react';
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SwipeButtons from './SwipeButtons';
import './App.css';
import TinderCards from './TinderCards';
import Chats from './Chats';
import ChatScreen from "./ChatScreen";
const App = () => {
  return (
    <div className="App">



      <Router>


        <Switch>

          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>

          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
