/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get("http://localhost:8080/api/allEmployees")
      .then((response) => {
        // Set the retrieved data to the employees state
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleAddEmployee = () => {
    navigator("/saveEmployee");
  };

  const deleteHandler = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8080/api/${id}`)
      .then(
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== id)
        )
      );
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center flex-column flex-sm-row">
        <h2>All Employees</h2>
        <button className="btn btn-success ml-2" onClick={handleAddEmployee}>
          Add a Employee
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-primary mr-2"
                  style={{ marginRight: "10px" }}
                  onClick={() => navigator(`/updateEmployee/${employee.id}`)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => deleteHandler(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesList;
