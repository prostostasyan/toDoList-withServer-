import React from 'react';
import {useState} from "react";
import styled from "styled-components";

const Input = styled.input`
    float: left;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #FFF;
    width: 75%;
    :focus{
        outline: none;
  }
`
const Button = styled.button`
    width: 20%;
    padding: 10px;
    font-size: 16px;
    background-color: #0066FF;
    color: #FFF;
    border: 2px solid #0066FF;
    :hover {
    background-color: #003399;
    border: 2px solid #003399;
    cursor: pointer;
}
  :focus{
      outline: none;
  } 
`


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
            <Input name="NewItem" type='text' value={value} placeholder="введите задачу" onChange={handleChange}/>
            <Button onClick={handleSubmit}>Добавить</Button>
        </form>)
}


export default Form;