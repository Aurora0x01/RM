import React from "react";

const EmployeeOfTheMonth = ({ employee }) => {
  return (
    <div className="employee-of-the-month">
      <h2>Employee of the Month</h2>
      <p>{employee}</p>
    </div>
  );
};

export default EmployeeOfTheMonth;
