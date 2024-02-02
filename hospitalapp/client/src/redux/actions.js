import {
  ADD_ONBOARD_DATA,
  DELETE_DATA,
  EDIT_DATA,
  GET_DATA,
} from "./actiontypes";
import axios from "axios";

const url = "http://localhost:8000";
export const getOnBoardData = (data) => async (dispatch) => {
  try {
    const appointmentdata = await axios.post(`${url}/appointment`, data);
    dispatch({ type: ADD_ONBOARD_DATA, payload: appointmentdata.data.user });
  } catch (error) {
    console.log(error);
  }
};

export const getAppointmentData = (queryval) => async (dispatch) => {
  try {
    const appointmentData = await axios.get(
      `${url}/appointment?search=${queryval.search}&sort=${queryval.sort}&specialization=${queryval.specialization}`
    );
    dispatch({ type: GET_DATA, payload: appointmentData.data.user });
  } catch (error) {
    console.log(error);
  }
};

export const onDelete = (id) => async (dispatch) => {
  try {
    const appointmentData = await axios.delete(`${url}/appointment/${id}`);
    dispatch({ type: DELETE_DATA, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const onEdit = (id, data) => async (dispatch) => {
  try {
    const appointmentData = await axios.put(`${url}/appointment/${id}`, data);
    dispatch({ type: EDIT_DATA, payload: appointmentData.data.userExist });
  } catch (error) {
    console.log(error);
  }
};
