import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from "./actionTypes";

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        { id: state.length + 1, text: payload, completed: false },
      ];
    case TOGGLE_TODO:
      return state.map((ele) =>
        ele.id === payload ? { ...ele, completed: !ele.completed } : ele
      );
    case DELETE_TODO:
      return state.filter((ele) => ele.id !== payload);

      case EDIT_TODO:
        return state.map((ele) =>
          ele.id === payload.id ? { ...ele, text: payload.newText } : ele
        );

    default:
      return state;
  }
};
