import React, {useEffect, useState} from 'react'
import {deleteData, getData, postData} from "../api/api";
import Form from "./Form";
import ToDoItem from "./ToDoItem";
import styled from "styled-components";

const ToDoListWrap = styled.div`
    margin-top: 30px;
    display:block;
    width: 50%;
    margin-left:auto;
    margin-right:auto;
`
const Error = styled.span`
    display: inline-block;
    color: crimson;
    margin-top:20px;
    font-size: 20px;
    font-weight: 900;
`


function ToDoList() {
    const [items, setItems] = useState([]);
    const [numRend, setRend] = useState(1);
    const [error, setError] = useState('');
    useEffect(() => {
        console.log(numRend)
        getData('posts')
            .then(res => {
                if (res.error === null) {
                    setItems([...res.data.data]);
                    setError('');
                    console.log('numRend');
                } else {
                    const err = String(res.error);
                    console.log(res.error);
                    setError(err);
                }
            })
    }, [numRend]);

    function addItem(text) {
        postData('posts', text)
            .then(() => {
                setRend(numRend + 1);
            })
    }

    function deleteItem(key) {
        deleteData('posts/', key)
            .then(() => {
                setRend(numRend + 1)
            })
    }

    return (
        <ToDoListWrap>
            <Form onSubmit={addItem}/>
            {(error !== '') && <Error>{error}</Error>}
            <ToDoItem entries={items}
                      delete={deleteItem}
            />
        </ToDoListWrap>
    )
}

export default ToDoList;


