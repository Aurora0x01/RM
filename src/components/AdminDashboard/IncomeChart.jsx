import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const IncomeChart = ({ data }) => {
  return (
    <div className="income-chart">
      <h2>Income Chart</h2>
      {data.length === 0 ? (
        <p>No data for the chart yet.</p>
      ) : (
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="income" stroke="#8884d8" />
        </LineChart>
      )}
    </div>
  );
};

export default IncomeChart;
