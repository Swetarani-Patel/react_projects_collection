import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTodo, ToggleTodo, addTodo, editTodo } from "../redux/actions";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [iseditTodo, setIsEditTodo] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState("");
  const [editedTodoId, setEditingTodoId] = useState(null);
  const dispatch = useDispatch();
  const selector = useSelector((store) => store);

  const AddTodoHandler = () => {
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  const toggleHandler = (id) => {
    dispatch(ToggleTodo(id));
  };

  const deleteHandler = (id) => {
    dispatch(DeleteTodo(id));
  };

  const EditHandler = (id, text) => {
    setEditingTodoId(id);
    setIsEditTodo(true);
    setUpdatedTodo(text);
  };

  const saveUpdatedTodoHandler = () => {
      dispatch(editTodo(editedTodoId, updatedTodo));
      setEditingTodoId(null);
      setIsEditTodo(false);
      setUpdatedTodo("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter New Todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={AddTodoHandler}>Add Todo</button>
      <div>
        {selector.map((ele) => (
          <div key={ele.id} style={{ border: "1px solid black" }}>
            {iseditTodo && editedTodoId === ele.id ? (
              <div>
                <input
                  type="text"
                  value={updatedTodo}
                  onChange={(e) => setUpdatedTodo(e.target.value)}
                />
                <button onClick={saveUpdatedTodoHandler}>Save</button>
              </div>
            ) : (
              <h2>{ele.text}</h2>
            )}
            <button
              onClick={() => {
                EditHandler(ele.id, ele.text);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteHandler(ele.id);
              }}
            >
              Delete
            </button>

            <button
              onClick={() => {
                toggleHandler(ele.id);
              }}
            >
              {ele.completed ? "Completed" : "Not Completed"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
