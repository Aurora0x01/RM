import React, { useState } from "react";
import SideBar from "./SideBar";
import RevenueCard from "./RevenueCard";
import TransactionsTable from "./TransactionsTable";
import IncomeChart from "./IncomeChart";
import OrderHistory from "./OrderHistory";
import EmployeeOfTheMonth from "./EmployeeOfTheMonth";
import '../../style/AdminDashboard.css';

const AdminDashboard = () => {
  // State to manage active section
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="admin-container">
      {/* Sidebar for navigation */}
      <SideBar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main content area */}
      <div className="admin-content">
        {activeSection === "dashboard" && (
          <>
            <h1 className="dashboard-title">Admin Dashboard</h1>
            <div className="dashboard-cards">
              {/* Revenue */}
              <RevenueCard revenue={0} />
              {/* Total Orders */}
              <div className="dashboard-card">
                <h2>Total Number of Orders</h2>
                <p>0</p>
              </div>
              {/* Employee of the Month */}
              <EmployeeOfTheMonth employee="None" />
            </div>

            {/* Latest Transactions Table */}
            <TransactionsTable transactions={[]} />

            {/* Income Chart */}
            <IncomeChart data={[]} />
          </>
        )}

        {/* Order History Section */}
        {activeSection === "orderHistory" && (
          <OrderHistory />
        )}

        {/* Placeholder content for other sections */}
        {activeSection === "products" && (
          <h2 className="section-placeholder">Products Management (Coming Soon)</h2>
        )}
        {activeSection === "categories" && (
          <h2 className="section-placeholder">Categories Management (Coming Soon)</h2>
        )}
        {activeSection === "employees" && (
          <h2 className="section-placeholder">Employees Management (Coming Soon)</h2>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
