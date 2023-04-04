// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import EmployeeCard from "./EmployeeCard";

function App() {
  const inititalEmployee = {
    name: "John",
    address: "Cilacap",
    photo:
      "https://thumbs.dreamstime.com/b/fake-smile-businessman-face-business-man-71892900.jpg",
  };

  const [employee, setEmployee] = useState(inititalEmployee);
  const updateEMployee = (employee) => {
    setEmployee({
      name: employee.name,
      address: employee.address,
      photo: employee.photo,
    });
  };
  return (
    <div className="container mx-auto bg-slate-200">
      <h1 className="text-center pt-5 font-bold text-2xl tracking-wider ">
        CRUD React Hooks
      </h1>
      <div className="w-full bg-gray-700">
        <div className="w-full bg-amber-200">
          <h1>Add New User</h1>
        </div>
        <div className="w-full bg-blue-200 ">
          <h1>Employee List</h1>
          <div className="grid grid-cols-3 p-3 gap-3">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
