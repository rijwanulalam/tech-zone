import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://tech-zone-server.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log(orders);
  const handleOrdersState = (id) => {
    fetch(`https://tech-zone-server.herokuapp.com/update/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ orderStatus: "Completed" }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    window.location.reload();
  };
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10">
        <table class="table table-striped my-5 container shadow-lg p-3 mb-5 rounded">
          <thead>
            <tr>
              <th scope="col">Track Id</th>
              <th scope="col">Customer Email</th>
              <th scope="col">Service Name</th>
              <th scope="col">Service Price</th>
              <th scope="col">Order Status</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <tbody key={order._id}>
              <tr>
                <th scope="row">{order._id}</th>
                <td>{order.email}</td>
                <td>{order.serviceTitle}</td>
                <td>{order.servicePrice}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleOrdersState(order._id)}
                  >
                    {order.orderStatus}
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
