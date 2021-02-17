import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <Person name="James" age="42" />
        <Person name="Asuka" age="30">
          My Hobbies: Scuba-diving
        </Person>
        <Person name="Chi-kun" age="12" />
      </div>
    );
  }
}

export default App;
