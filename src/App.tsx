import React from 'react';
import logo from './logo.svg';
import './App.css';
import {websocketContext, socket} from "./contexts/WebsocketContext";
import {Websocket} from "./Compenents/Websocket";

function App() {
  return (
      <websocketContext.Provider value={socket}>
          <Websocket/>
      </websocketContext.Provider>
  );
}

export default App;
