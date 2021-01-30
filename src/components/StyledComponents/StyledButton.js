import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => (props.showPersons ? 'red' : 'green')};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.showPersons ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

export default StyledButton;
