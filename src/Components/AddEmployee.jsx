/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState();
  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/saveEmployee", employeeData);
      setEmployeeData({});
      navigator("/allEmployees");
    } catch (error) {
      console.log(error);
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setEmployeeData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));

    // Validate input length and update error state
    if (name === "firstName" && value.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "First Name must be at least 5 characters long",
      }));
    } else if (name === "lastName" && value.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Last Name must be at least 5 characters long",
      }));
    } else if (name === "email" && value.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email must be at least 5 characters long",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "", // Clear the error message if validation passes
      }));
    }
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Add Employee</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={employeeData.firstName}
                    onChange={handleChange}
                    minLength="5"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={employeeData.lastName}
                    onChange={handleChange}
                    minLength="5"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={employeeData.email}
                    onChange={handleChange}
                    minLength="5"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Add Employee
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
