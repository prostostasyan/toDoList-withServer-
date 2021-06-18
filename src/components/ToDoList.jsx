import React, { useEffect, useState, useCallback } from "react";
import { deleteData, getData, postData } from "../api/api";
import Form from "./Form";
import ToDoItem from "./ToDoItem";
import styled from "styled-components";

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
  const [numRend, setRend] = useState(1);
  const [error, setError] = useState("");

  // TODO: async await
  useEffect(() => {
    console.log(numRend);
    getData("posts").then((res) => {
      if (res.error === null) {
        setItems([...res.data.data]);
        setError("");
        console.log("numRend");
      } else {
        const err = String(res.error);
        console.log(res.error);
        setError(err);
      }
    });
  }, [numRend]);

  // TODO: async await
  function addItem(text) {
    postData("posts", text).then((response) => {
      if (!response.error) {
        const data = response.data.data;
        setItems((items) => [...items, data]);
      }
    });
  }

  // TODO: async await

  const deletePost = (key) => {

    // TODO: Update logic to update items
    deleteData("posts/", key).then(() => {
      console.log(key);
      setRend(numRend + 1);
    });
  };

  return (
    <ToDoListWrap>
      <Form onSubmit={addItem} />
      {error !== "" && <Error>{error}</Error>}
      <Ul>
        {items.map((item) => (
          <ToDoItem
            key={item.id}
            id={item.id}
            text={item.text}
            onDelete={deletePost}
          />
        ))}
      </Ul>
    </ToDoListWrap>
  );
}

export default ToDoList;
