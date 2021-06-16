import React, {useEffect, useState} from 'react'
import s from './ToDoList.module.css';
import {deleteData, getData, postData} from "../api/api";

const Form = (props) => {
    const [value, setValue] = useState('');

    const handleChange = (elem) => {
        setValue(elem.target.value)
    }
    const handleSubmit = (elem) => {
        elem.preventDefault();
        if (value !== '') {
            props.onSubmit(value);
            setValue('')
        }
    }

    return (
        <form>
            <input name="NewItem" type='text' value={value} placeholder="введите задачу" onChange={handleChange}/>
            <button onClick={handleSubmit}>Добавить</button>
        </form>)
}


function ToDoItem(props) {

    return (
        <ul className={s.theList}>
            {props.entries.map((item) =>
                <li onClick={() => props.delete(item.id)} key={item.id}> {item.text} </li>
            )}
        </ul>
    )

}

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
                    console.log('numRend');
                } else {
                    const err = String(res.error)
                    setError(err);
                }
            })
    }, [numRend]);

    function addItem(text) {
        postData('posts', text)
            .then(data => {
                setRend(numRend + 1)
                console.log(data)
            })
    }

    function deleteItem(key) {
        deleteData('posts/', key)
            .then(data => {
                setRend(numRend + 1)
                console.log(data)
            })
    }

    return (
        <div className={s.todoListMain}>
            <div className={s.header}>
                <Form onSubmit={addItem}/>
            </div>
            {(items.length === 0) && <span className={s.error}>{error}</span>}
            <ToDoItem entries={items}
                      delete={deleteItem}
            />
        </div>
    )
}

const ToDoListContainer = () => <div className={s.container}>
    <ToDoList/>
</div>

export default ToDoListContainer;


