import {
  ADD_ONBOARD_DATA,
  DELETE_DATA,
  EDIT_DATA,
  GET_DATA,
} from "./actiontypes";

const initialData = {
  doctors: null,
};
export const reducer = (state = initialData, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ONBOARD_DATA:
      return { ...state, payload };
    case DELETE_DATA:
      return {
        ...state,
        doctors: state.doctors.filter((ele) => ele._id !== payload),
      };
    case GET_DATA:
      return { ...state, doctors: payload };
    case EDIT_DATA:
      return {
        ...state,
        doctors: state.doctors.map((ele) =>
          ele._id === payload._id ? payload : ele
        ),
      };
    default:
      return state;
  }
};
