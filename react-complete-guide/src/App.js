import React, { Component } from 'react';
//import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

/*
const app = (props) => {
  //useState returns an array with exactly 2 elements
  //first element - returns current state
  //second element - function used to update state
  //const stateArr = useState({
  const [personState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Jake", age: 37 },
    ],
    otherState: "some other value",
  });
  //if state changes it will make react re-render dom

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: "Blake", age: 24 },
      ],
      otherState: personState.otherState,
    });
  };

  //hooks dont have render function
  return (
    <div className="App">
      <h1> Hi I'm a react developer</h1>
      <p>This is really working !</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      />
      <Person name="Max" age="28" />
      <Person name="Manu" age="29" />
      My Hobbies: Racing
      <Person />
    </div>
  );
};
*/

class App extends Component {
  //if state changes it will make react re-render dom
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Jake", age: 37 },
    ],
  };

  //Handler is used to define a method that were not actively calling but assigning as an event handler
  switchNameHandler = (newName) => {
    //Dont do this to change state: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Blake", age: 24 },
      ],
    }); //allows us to update the states
    //console.log('Was clicked');
  };

  nameChangedHandler = (event) => {
    this.setState({
        persons: [
          { name: "Manu", age: 42 },
          { name: event.target.value, age: 49}
        ]

    })

  }







  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };



    return (
      <div className="App">
        <h1> Hi I'm a react developer</h1>
        <p>This is really working !</p>
        <button
          style={style} 
          onClick={() => this.switchNameHandler("Maximilian!")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed = {this.nameChangedHandler}
          click= {this.switchNameHandler.bind(this,"Max")}> My Hobbies: Racing </Person>

      </div>
    );
  }
}

export default App;
//export default app;
