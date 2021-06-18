import React from 'react';
import styled from "styled-components";


const Ul = styled.ul`
    clear:both;
    list-style: none;
    padding-left: 0;
    width: 100%;
    padding-top:20px ;
`
const Li = styled.li`
    color: #333;
    background-color: rgba(255,255,255,.5);
    word-wrap: break-word;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 5px;
    transition: background-color .2s ease-out;
    :hover {
        background-color: pink;
        cursor: pointer;
`


const ToDoItem =(props) =>{
    return (
        <Ul>
            {props.entries.map((item) =>
                <Li onClick={() => props.delete(item.id)} key={item.id}> {item.text} </Li>
            )}
        </Ul>
    )

}


export default ToDoItem;