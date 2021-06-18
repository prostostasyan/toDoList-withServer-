import React from 'react'
import './App.css';
import ToDoListContainer from "./components/ToDoList";
import styled from 'styled-components';


const AppWrapper = styled.div`
  background-color: cornflowerblue;
  padding: 40px 0;
  min-width: 400px;
  text-align: center;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`


function App() {
    return (
        <AppWrapper>
            <div className="App">
                <ToDoListContainer/>
            </div>
        </AppWrapper>
    );
}

export default App;
