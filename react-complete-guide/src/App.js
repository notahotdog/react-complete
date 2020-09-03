import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  //if state changes it will make react re-render dom
  state ={
    persons: [
      { name: 'Max', age:28 },
      { name: 'Jake', age:37 },
    ]
  }

  //Handler is used to define a method that were not actively calling but assigning as an event handler
  switchNameHandler = () => {
    //Dont do this to change state: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Max', age:28 },
        { name: 'Blake', age:24 },
      ]
    }) //allows us to update the states
    //console.log('Was clicked');
  }



  render() {
    return (
      <div className="App">
        <h1> Hi I'm a react developer</h1>
        <p>This is really working !</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name ={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name ={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name = "Max" age ="28"/>
        <Person name = "Manu" age="29"/>My Hobbies: Racing<Person />

      </div>
    );
  }
}

export default App;
