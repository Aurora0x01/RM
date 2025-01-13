import React from "react";

const RevenueCard = ({ revenue }) => {
  return (
    <div className="revenue-card">
      <h2>Revenue</h2>
      <p>{revenue} dt</p>
    </div>
  );
};

export default RevenueCard;
