import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Li = styled.li`
  color: #333;
  background-color: rgba(255, 255, 255, 0.5);
  word-wrap: break-word;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  transition: background-color 0.2s ease-out;

  :hover {
    background-color: pink;
    cursor: pointer;
  }
`;

const ToDoItem = ({onDelete, text, id}) => (
  <Li onClick={() => onDelete(id)}> {text} </Li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  onDelete: PropTypes.func,
  id: PropTypes.number,
};

export default ToDoItem;
