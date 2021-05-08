import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "James", age: 42 },
      { name: "Asuka", age: 31 },
      { name: "Chris", age: 39 },
    ],
    otherState: "some other value",
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log("Was clicked!");
    // this.state.persons[0].name = "JimmyMac"; DON'T DO THIS (mutate state directly)
    setPersonsState({
      persons: [
        { name: "James Michael", age: 42 },
        { name: "Asuka", age: 31 },
        { name: "Chris", age: 34 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
