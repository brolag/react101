import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterList from "./components/counterList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contador en React</h1>
        </header>
        <CounterList />
      </div>
    );
  }
}

export default App;
