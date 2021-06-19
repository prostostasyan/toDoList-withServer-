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
`;

const Check = styled.input.attrs({
    type: 'checkbox',
})`
    float: left;
    transform: scale(1.3);
`;
const Del = styled.button`
    float: right;
    transition: background-color 0.2s ease-out;
    :hover {
        transform: scale(1.3);
        border: 1px solid black;
        cursor: pointer;
        background-color: darksalmon;
    }
`;

const ToDoItem = ({onDelete, checkPost, text, id, done}) => (
    <Li>
        <Check checked={done} onChange={() => checkPost(id, !done)} />
        {text}
        <Del onClick={() => onDelete(id)}> x </Del>
    </Li>
);

ToDoItem.propTypes = {
    text: PropTypes.string,
    onDelete: PropTypes.func,
    id: PropTypes.number,
};

export default ToDoItem;
