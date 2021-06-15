import React, {useEffect, useState} from 'react'
import s from './ToDoList.module.css';
import {deleteData, getData, postData} from "../api/api";

let Form = (props) => {
    const [value, setValue] = useState('');

    const handleChange = (elem) => {
        setValue(elem.target.value)
    }
    const handleSubmit = (elem) => {
        elem.preventDefault();
        if(value !== ''){
            props.onSubmit(value);
            setValue('')
        }
    }

    return (
        <form>
            <input name="NewItem" type='text' value ={value} placeholder="введите задачу" onChange={handleChange}/>
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
    useEffect(()=>{
        getData('posts')
            .then(res=>{
                setItems([...res.data.data])
            })
    })

    function addItem(text) {
        console.log(text)
        postData('posts',text)
            .then(err=>console.log(err))

        console.log(items)
    }

    function deleteItem(key) {
        console.log(key)
        deleteData('posts/', key)
            .then(err=>console.log(err))
        console.log(items)
    }




    return (
        <div className={s.todoListMain}>
            <div className={s.header}>
                <Form onSubmit={addItem}/>
            </div>
            <ToDoItem entries={items}
                      delete={deleteItem}
            />
        </div>
    )
}


let ToDoListContainer = () => <div className={s.container}>
    <ToDoList/>
</div>

export default ToDoListContainer;


