/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import Home from "./Components/Home";
import EmployeesList from "./Components/EmployeesList";
import AddEmployee from "./Components/AddEmployee";
import UpdateEmployee from "./Components/updateEmployee";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allEmployees" element={<EmployeesList />} />
        <Route path="/saveEmployee" element={<AddEmployee />} />
        <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
