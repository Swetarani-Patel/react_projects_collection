import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { getOnBoardData } from "../redux/actions";
import { useNavigate } from "react-router-dom";
const Onboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    image: "",
    specialization: "",
    experience: null,
    location: "",
    date: "",
    slots: null,
    fee: null,
  });

  const handleInputChange = (e) => {
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
   e.preventDefault();
  //  console.log(appointmentData)
   await dispatch(getOnBoardData(appointmentData));
    navigate('/dashboard')
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Appointment Form</h2>
      <form
        style={{
          width: "50%",
          margin: "auto",
          border: "1px solid lightgray",
          padding: "2rem",
        }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={appointmentData.name}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            onChange={handleInputChange}
            value={appointmentData.image}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="specialization" className="form-label">
            Specialization
          </label>
          <select
            className="form-select"
            id="specialization"
            name="specialization"
            onChange={handleInputChange}
            value={appointmentData.specialization}
            required
          >
            <option value="">Select Specialization</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Psychiatrist">Psychiatrist</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="experience" className="form-label">
            Experience
          </label>
          <input
            type="number"
            className="form-control"
            name="experience"
            onChange={handleInputChange}
            value={appointmentData.experience}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            onChange={handleInputChange}
            value={appointmentData.location}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            onChange={handleInputChange}
            value={appointmentData.date}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="slots" className="form-label">
            Slots
          </label>
          <input
            type="number"
            className="form-control"
            id="slots"
            name="slots"
            onChange={handleInputChange}
            value={appointmentData.slots}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fee" className="form-label">
            Fee
          </label>
          <input
            type="number"
            className="form-control"
            id="fee"
            name="fee"
            onChange={handleInputChange}
            value={appointmentData.fee}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Onboard;
