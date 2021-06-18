import React from "react";
import styled from "styled-components";

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

const ToDItem = ({ onDelete, text, id }) => (
  <Li onClick={() => onDelete(id)}> {text} </Li>
);

// TODO: PropTypes

export default ToDItem;
