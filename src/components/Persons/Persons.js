import React, { useEffect } from 'react';
import Person from './Person/Person';

const persons = (props) => {
  useEffect(() => {
    console.log('[Persons.js] useEffect');
    return () => {
      console.log('[Persons.js] cleanup work');
      // with [] as 2nd arg runs only before removing component
      // without 2nd arg runs after every update
    };
  }, []);

  return props.persons.map((person, index) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => props.onDeletePersonHandler(index)}
        changed={(event) => props.onNameChangeHandler(event, person.id)}
      />
    );
  });
};

export default persons;
