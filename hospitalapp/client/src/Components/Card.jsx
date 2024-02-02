import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onDelete } from "../redux/actions";
import EditModal from "./EditModal";

const Card = ({ ele }) => {
  const dispatch = useDispatch();
  const[isedit, setIsEdit] = useState(false)
  const deleteData = (id) => {
    dispatch(onDelete(id));
  };

  const editData = (id)=>{
    setIsEdit(true);
  }
  return (
    <div
      className="card mt-5"
      style={{ maxWidth: "500px", marginLeft: "3rem" }}
    >
      <img
        style={{ height: "500px", width: "498px" }}
        src={ele?.image}
        className="card-img-top"
        alt={ele?.name}
      />
      <div className="card-body">
        <h5 className="card-title">{ele?.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Specialization: {ele?.specialization}
        </li>
        <li className="list-group-item">Experience: {ele?.experience}</li>
        <li className="list-group-item">Location: {ele?.location}</li>
        <li className="list-group-item">Slots: {ele?.slots}</li>
        <li className="list-group-item">Date: {ele?.date}</li>
        <li className="list-group-item">Fees: {ele?.fee}</li>
      </ul>
      <div className="card-body">
        <button onClick={()=>{editData(ele._id)}} type="button" className="btn btn-secondary">
          Edit
        </button>{" "}
        &nbsp;
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            deleteData(ele._id);
          }}
        >
          Delete
        </button>
      </div>
      {
        isedit && <EditModal setIsEdit={setIsEdit} ele={ele}/>
      }
    </div>
  );
};

export default Card;
