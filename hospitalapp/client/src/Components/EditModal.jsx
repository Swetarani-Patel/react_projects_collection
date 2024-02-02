import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { onEdit } from "../redux/actions";

const EditModal = ({ setIsEdit, ele }) => {
    const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: ele.name,
    image: ele.image,
    specialization: ele.specialization,
    experience: ele.experience,
    location: ele.location,
    slots: ele.slots,
    date: ele.date,
    fees: ele.fee,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSave = async(id, formData)=>{
    await dispatch(onEdit(id,formData ))
    setIsEdit(false);
  }

  return (
    <Modal show={true} onHide={() => setIsEdit(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Doctor Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label>
            <strong>Name:</strong>
            <input
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <strong>Image Url:</strong>
            <input
              className="form-control"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <strong>Specialization:</strong>
            <select
              className="form-control"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
            >
              <option value="select">Select Specialization</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Psychiatrist">Psychiatrist</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            <strong>Experience:</strong>
            <input
              className="form-control"
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <strong>Location:</strong>
            <input
              className="form-control"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <strong>Slots:</strong>
            <input
              className="form-control"
              type="number"
              name="slots"
              value={formData.slots}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <strong>Date:</strong>
            <input
              className="form-control"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <strong>Fees:</strong>
            <input
              className="form-control"
              type="numbe"
              name="fees"
              value={formData.fees}
              onChange={handleChange}
            />
          </label>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setIsEdit(false);
          }}
        >
          Close
        </Button>
        <Button
          variant="primary"
        onClick={()=>{onSave(ele._id, formData)}}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
