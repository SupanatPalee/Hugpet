import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import  Login  from "./login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
        <Route path="/chat/:person">
            <Header backButton="/hugpet"/>
            <ChatScreen/>
          </Route> 
        <Route path="/chat">
            <Header backButton="/hugpet" />
            <Chats />
          </Route>
         
        <Route path="/hugpet">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
         
          <Route path="/">
            <Login/>
          </Route>
         
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
