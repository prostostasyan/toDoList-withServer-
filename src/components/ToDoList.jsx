import React, {useEffect, useState} from 'react';
import {deleteData, getData, postData, putData} from '../api/api';
import Form from './Form';
import ToDoItem from './ToDoItem';
import styled from 'styled-components';

const ToDoListWrap = styled.div`
    margin-top: 30px;
    display: block;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
`;

const Error = styled.span`
    display: inline-block;
    color: crimson;
    margin-top: 20px;
    font-size: 20px;
    font-weight: 900;
`;

const Ul = styled.ul`
    clear: both;
    list-style: none;
    padding-left: 0;
    width: 100%;
    padding-top: 20px;
`;

function ToDoList() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');

    useEffect(async () => {
        const response = await getData('posts');

        if (response.error === null) {
            setItems([...response.data.data]);
            setError('');
        } else {
            const err = String(response.error);
            setError(err);
        }
    }, []);

    const addItem = async (text) => {
        const response = await postData('posts', text);
        if (!response.error) {
            const data = response.data.data;
            setItems((prev) => [...prev, data]);
        } else {
            const err = String(response.error);
            setError(err);
        }
    };

    const checkedItem = async (id, state) => {
        const response = await putData(
            'posts',
            id,
            items.find((post) => post.id === id),
            state
        );
        if (!response.error) {
            items.some((post) => {
                if (post.id === id) {
                    post.done = !post.done;
                    return true;
                }
            });
            setItems((items) => [...items]);
        } else {
            const err = String(response.error);
            setError(err);
        }
    };

    const deletePost = async (key) => {
        const response = await deleteData('posts', key);
        if (!response.error) {
            setItems(items.filter((item) => item.id !== key));
        } else {
            const err = String(response.error);
            setError(err);
        }
    };

    return (
        <ToDoListWrap>
            <Form onSubmit={addItem} />
            {error !== '' && <Error>{error}</Error>}
            <Ul>
                {items.map((item) => (
                    <ToDoItem
                        done={item.done}
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        checkPost={checkedItem}
                        onDelete={deletePost}
                    />
                ))}
            </Ul>
        </ToDoListWrap>
    );
}

export default ToDoList;
