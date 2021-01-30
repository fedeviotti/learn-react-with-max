import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  // behind the scene it calls the constructor(props) and puts inside super(props) and the state definition
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 },
    ],
    showPersons: false,
    changeCounter: 0,
    authenticated: false,
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); // alternative to ... operator
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const person = { ...this.state.persons.find((pers) => pers.id === id) };
    person.name = event.target.value;
    const persons = this.state.persons.map((pers) =>
      pers.id === id ? person : pers
    );
    // if prevState is needed I call the anonymous function inside the setState
    this.setState((prevState, counter) => {
      return { persons: persons, changeCounter: prevState.changeCounter + 1 };
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          onDeletePersonHandler={this.deletePersonHandler}
          onNameChangeHandler={this.nameChangeHandler}
          persons={this.state.persons}
        />
      );
    }

    return (
      <WithClass classes="App">
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          <Cockpit
            personsLength={this.state.persons.length}
            onClick={this.togglePersonsHandler}
            showPersons={this.state.showPersons}
          />
          {/*dynamic content JS way - recommended*/}
          {persons}
        </AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
