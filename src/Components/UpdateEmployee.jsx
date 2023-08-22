/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEmployee = () => {
  const [errors, setErrors] = useState();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const params = useParams();

  const navigator = useNavigate();

  useEffect(() => {
    // Fetch employee data on component mount
    axios.get(`http://localhost:8080/api/${params.id}`).then((response) => {
      setEmployee(response.data);
    });
  }, []);

  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setEmployee((prevEmployee) => ({
  //       ...prevEmployee,
  //       [name]: value,
  //     }));
  //   };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make a PUT request to update the employee data
    axios
      .put(`http://localhost:8080/api/employee/${params.id}`, employee)
      .then((response) => {
        console.log(response);
      })
      .then(navigator("/"));
  };

  if (!employee) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Edit Employee Details</h2>
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
            value={employee.firstName}
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
            value={employee.lastName}
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
            value={employee.email}
            onChange={handleChange}
            minLength="5"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
