import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VncDisplay from './VncDisplay';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            Edit URL in VncDisplay tag to use
        <VncDisplay url="ws://10.10.10.102:8889/console?uuid=93d0360f-50fb-8db1-cc86-8a73f044e6ee"/>
        </p>
      </div>
    );
  }
}

export default App;
