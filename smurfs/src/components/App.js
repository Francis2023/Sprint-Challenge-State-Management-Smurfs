import React, { Component } from "react";
import "./App.css";
import Header from './Header'
import SmurfsList from './SmurfsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <SmurfsList />
      </div>
    );
  }
}

export default App;
