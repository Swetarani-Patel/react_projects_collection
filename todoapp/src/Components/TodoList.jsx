import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const TodoList = ({ todos, onDeleteTodo, index, onUpdateTodo }) => {
  const [isTodo, setIsTodo] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todos);
  const [toggleTodo, setToggleTodo] = useState(false);
  const EditTodo = () => {
    setIsTodo(true);
  };

  const handleSave = () => {
    onUpdateTodo(updatedTodo);
    setIsTodo(false);
  };
  return (
    <tr className="bg-slate-100 mt-12">
      <td className="px-2 py-2">{index + 1}</td>

      {isTodo ? (
        <>
          <input
            type="text"
            value={updatedTodo}
            className="mt-2 outline-none"
            onChange={(e) => {
              setUpdatedTodo(e.target.value);
            }}
          />{" "}
          &nbsp;
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <td className="px-2 py-2">{todos}</td>
      )}

      <td
        className={`px-2 py-2 ${
          toggleTodo ? "text-green-400" : "text-red-400"
        } cursor-pointer`}
        onClick={() => setToggleTodo(!toggleTodo)}
      >
        {toggleTodo ? "Completed" : "Not Completed"}
      </td>
      <td className="px-16 py-2 text-xl cursor-pointer" onClick={EditTodo}>
        <FiEdit />
      </td>
      <td className="px-16 py-2 text-xl cursor-pointer" onClick={onDeleteTodo}>
        <IoMdRemoveCircleOutline />
      </td>
    </tr>
  );
};

export default TodoList;
