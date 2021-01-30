import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import StyledButton from '../StyledComponents/StyledButton';
import withClass2 from '../../hoc/withClass2';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js useEffect');
    console.log(authContext.authenticated);
    toggleBtnRef.current.click();
  }, []);
  useEffect(() => {
    console.log('[Cockpit.js 2nd useEffect');
  });

  let assignedClasses = [];
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <React.Fragment>
      <h1>Hi, I'm a React app</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <StyledButton
        ref={toggleBtnRef}
        showPersons={props.showPersons}
        onClick={props.onClick}
      >
        Toggle Persons
      </StyledButton>
      <StyledButton onClick={authContext.login}>Log in</StyledButton>
    </React.Fragment>
  );
};

export default withClass2(React.memo(cockpit), classes.Cockpit);
