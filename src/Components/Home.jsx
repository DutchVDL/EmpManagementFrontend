/* eslint-disable no-unused-vars */
import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2>Welcome to the Employees Management App</h2>
          <p>
            The Employees Management App allows you to manage employee data
            efficiently. With this app, you can perform all the CRUD operations:
          </p>
          <ul>
            <li>
              <strong>Create:</strong> Add new employees to the system.
            </li>
            <li>
              <strong>Read:</strong> View details of existing employees.
            </li>
            <li>
              <strong>Update:</strong> Modify information of employees.
            </li>
            <li>
              <strong>Delete:</strong> Remove employees from the system.
            </li>
          </ul>
          <p>
            Whether you need to add new team members, update employee details,
            or remove outdated records, the Employees Management App provides a
            user-friendly interface to perform these tasks seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
