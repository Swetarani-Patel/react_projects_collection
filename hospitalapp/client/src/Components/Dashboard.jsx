import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentData } from "../redux/actions";
const Dashboard = () => {
  const selector = useSelector((store) => store);
  const dispatch = useDispatch();
  const [queryval, setQueryVal] = useState({
    sort: "",
    specialization: "",
    search: "",
  });
  useEffect(() => {
    dispatch(getAppointmentData(queryval));
  }, [dispatch, queryval]);

  const handleSpecializationChange = (e) => {
    setQueryVal({
      ...queryval,
      specialization: e.target.value,
    });
  };

  const handleSortChange = (e) => {
    setQueryVal({
      ...queryval,
      sort: e.target.value,
    });
  };

  const handleSearchChange = (e) => {
    setQueryVal({
      ...queryval,
      search: e.target.value,
    });
  };

  const handleSearchButtonClick = () => {
    dispatch(getAppointmentData(queryval));
  };
  return (
    <div className="container my-4">
      <h3 className="text-center">Doctor Dashboard</h3>
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-md-3">
          <label htmlFor="specialization" className="form-label">
            Filter By Specialization:
          </label>
          <select
            id="specialization"
            name="specialization"
            className="form-select"
            value={queryval.specialization}
            onChange={handleSpecializationChange}
          >
            <option value="select">Select Specialization</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Psychiatrist">Psychiatrist</option>
          </select>
        </div>

        <div className="col-md-3">
          <label htmlFor="sortByDate" className="form-label">
            Sort by Date:
          </label>
          <select
            id="sortByDate"
            name="sortByDate"
            className="form-select"
            value={queryval.sort}
            onChange={handleSortChange}
          >
            <option value="">Select Sorting Order</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <div className="col-md-3">
          <label htmlFor="searchText" className="form-label">
            Search:
          </label>
          <input
            type="text"
            id="searchText"
            name="searchText"
            placeholder="Search by Name.."
            className="form-control"
            value={queryval.search}
            onChange={handleSearchChange}
          />
        </div>

        <div className="col-md-2 mt-4">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleSearchButtonClick}
          >
            <FaSearch />
          </button>
        </div>
      </div>
      <div>
        {selector.doctors?.map((ele) => {
          return <Card key={ele._id} ele={ele} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
