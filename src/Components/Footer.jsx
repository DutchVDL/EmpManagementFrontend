/* eslint-disable no-unused-vars */
import React from "react";

export const Footer = () => {
  return (
    <footer className="footer bg-secondary mt-auto py-3 fixed-bottom">
      <div className="container text-center">
        <p>
          Svanidze Giorgi &copy; {new Date().getFullYear()} Employee Management
          System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
