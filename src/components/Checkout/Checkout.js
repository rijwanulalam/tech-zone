import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../App";
import NavBar from "../Home/NavBar/NavBar";
import ProcessPayment from "./ProcessPayment";

const Checkout = () => {
  const { pId } = useParams();
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://tech-zone-server.herokuapp.com/checkout/${pId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [pId]);

  const { serviceTitle, servicePrice } = service;

  const handlePayment = (paymentId) => {
    const orderDetails = {
      ...loggedInUser,
      serviceTitle,
      servicePrice,
      paymentId,
      orderTime: new Date(),
      orderStatus: "pending",
    };
    fetch("https://tech-zone-server.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        history.push("/dashboard/admin");
      });
  };

  return (
    <div>
      <NavBar></NavBar>
      <table class="table table-striped my-5 container shadow-lg p-3 mb-5 rounded">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Service Name</th>
            <th scope="col">Service Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{serviceTitle}</td>
            <td>{servicePrice}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Total</td>
            <td>{servicePrice}</td>
          </tr>
        </tbody>
      </table>
      <div className="container col-md-12 text-center">
        <h3>Pay Your Bill</h3>
        <ProcessPayment handlePayment={handlePayment}></ProcessPayment>
      </div>
    </div>
  );
};

export default Checkout;
