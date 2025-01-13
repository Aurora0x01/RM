import React, { useState } from "react";

const OrderHistory = () => {
  const [filters, setFilters] = useState({
    orderId: "",
    paymentMethod: "",
    fromDate: "",
    toDate: "",
  });

  const [orders, setOrders] = useState([]); // Placeholder for order data

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    // Placeholder for search logic
    console.log("Search filters:", filters);
  };

  const handleReset = () => {
    setFilters({
      orderId: "",
      paymentMethod: "",
      fromDate: "",
      toDate: "",
    });
    setOrders([]); // Clear orders
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f8f1e5", height: "100vh" }}>
      <h1 style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "2rem" }}>
        Order History
      </h1>
      <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ fontSize: "1.2rem", marginBottom: "15px", fontWeight: "bold" }}>Search Filter</h2>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <div>
            <label>Order ID:</label>
            <input
              type="text"
              name="orderId"
              value={filters.orderId}
              onChange={handleInputChange}
              style={{ marginLeft: "10px", padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div>
            <label>Payment method:</label>
            <input
              type="text"
              name="paymentMethod"
              value={filters.paymentMethod}
              onChange={handleInputChange}
              style={{ marginLeft: "10px", padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div>
            <label>From Date:</label>
            <input
              type="date"
              name="fromDate"
              value={filters.fromDate}
              onChange={handleInputChange}
              style={{ marginLeft: "10px", padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div>
            <label>To Date:</label>
            <input
              type="date"
              name="toDate"
              value={filters.toDate}
              onChange={handleInputChange}
              style={{ marginLeft: "10px", padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <button onClick={handleSearch} style={{ padding: "10px 15px", backgroundColor: "#b89470", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Search
          </button>
          <button onClick={handleReset} style={{ padding: "10px 15px", marginLeft: "10px", backgroundColor: "#fff", color: "#000", border: "1px solid #ccc", borderRadius: "5px", cursor: "pointer" }}>
            Reset
          </button>
        </div>
      </div>
      <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>ID</th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>Order ID</th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>Payment Method</th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>Amount</th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>Employee ID</th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>Created At</th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", padding: "15px" }}>
                  No data available.
                </td>
              </tr>
            ) : (
              orders.map((order, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #ccc", padding: "10px" }}>{order.id}</td>
                  <td style={{ border: "1px solid #ccc", padding: "10px" }}>{order.orderId}</td>
                  <td style={{ border: "1px solid #ccc", padding: "10px" }}>{order.paymentMethod}</td>
                  <td style={{ border: "1px solid #ccc", padding: "10px" }}>{order.amount}</td>
                  <td style={{ border: "1px solid #ccc", padding: "10px" }}>{order.employeeId}</td>
                  <td style={{ border: "1px solid #ccc", padding: "10px" }}>{order.createdAt}</td>
                  <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                    <button style={{ padding: "5px 10px", borderRadius: "5px", backgroundColor: "#b89470", color: "#fff", border: "none" }}>
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
