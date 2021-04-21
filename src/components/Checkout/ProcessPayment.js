import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SplitForm from "./SplitForm";

const stripePromise = loadStripe(
  "pk_test_51IiNYkHkbF5vCyUC2AGw8at9oY7TROJtvUSWfyxCsjGJLWObrGhl5WhF5BRxz9OBJlp7a2SKeEi17WVGJHWhh1Pd00YNur3BRk"
);
const ProcessPayment = ({handlePayment}) => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <SplitForm handlePayment={handlePayment}></SplitForm>
      </Elements>
    </div>
  );
};

export default ProcessPayment;
