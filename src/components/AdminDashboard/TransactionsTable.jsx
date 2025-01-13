import React from "react";

const TransactionsTable = ({ transactions }) => {
  return (
    <div className="transactions-table">
      <h2>Latest Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Order ID</th>
              <th>Payment Method</th>
              <th>Amount</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.id}</td>
                <td>{transaction.orderId}</td>
                <td>{transaction.paymentMethod}</td>
                <td>{transaction.amount} dt</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionsTable;
