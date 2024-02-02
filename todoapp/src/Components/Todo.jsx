import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState("");
  const [newTodos, setnewTodos] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setnewTodos(storedTodos);
  }, []);

  const addTodos = () => {
    const updatedTodos = [...newTodos, todos];
    setnewTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...newTodos];
    updatedTodos.splice(index, 1);
    setnewTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  const updateTodo = (index, newtodo) => {
    const updatedTodos = [...newTodos];
    updatedTodos[index] = newtodo;
    setnewTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  const filteredTodo = newTodos.filter((ele) => ele.includes(searchFilter));

  return (
    <div className="text-center mt-5">
      <h1 className="text-5xl">Todo App</h1>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Add item...."
          value={todos}
          onChange={(e) => {
            setTodos(e.target.value);
          }}
          className="border p-4 lg:pr-[30rem] xl:pr-[30rem] text-xl shadow-lg outline-none"
        />
        <button
          onClick={addTodos}
          className="text-white bg-black p-4 px-6 text-xl shadow-lg"
        >
          Add
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Todos.."
          className="mt-4 p-4 lg:pr-[35rem] xl:pr-[35rem] text-xl outline-none border-b-2"
          onChange={(e) => {
            setSearchFilter(e.target.value);
          }}
        />
      </div>
      <table className="m-auto mt-8">
        <thead>
          <tr className="border bg-slate-200">
            <th className="px-10 py-4">Sl No.</th>
            <th className="px-14 py-4">Task Name</th>
            <th className="px-14 py-4">Status</th>
            <th className="px-14 py-4">Edit</th>
            <th className="px-14 py-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodo.map((todos, index) => (
            <TodoList
              key={index}
              todos={todos}
              index={index}
              onDeleteTodo={() => deleteTodo(index)}
              onUpdateTodo={(newtodo) => updateTodo(index, newtodo)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
