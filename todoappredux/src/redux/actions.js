import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from "./actionTypes";

export const addTodo = (data) => (dispatch) => {
  dispatch({ type: ADD_TODO, payload: data });
};

export const ToggleTodo = (id) => (dispatch) => {
  dispatch({ type: TOGGLE_TODO, payload: id });
};
export const DeleteTodo = (id) => (dispatch) => {
  dispatch({ type: DELETE_TODO, payload: id });
};

export const editTodo = (id, newText) =>(dispatch)=> {
 dispatch({type:EDIT_TODO, payload:{id, newText}})
}
