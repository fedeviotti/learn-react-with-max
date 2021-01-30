import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  // from version 16.6
  static contextType = AuthContext;

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    return (
      <StyledDiv>
        {this.context.authenticated ? (
          <p>User Authenticated!</p>
        ) : (
          <p>Please Log In</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          // ref before 16.3 version
          /*ref={(inputEl) => {
            this.inputElement = inputEl;
          }}*/
          ref={this.inputElementRef} // ref after 16.3 version
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </StyledDiv>
    );
  }
}

// declare the props the component will receive
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;
