import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [add, setAdd] = useState(false);
  const handleButton = () => {
    if (email !== "") {
      fetch("https://tech-zone-server.herokuapp.com/addNewAdmin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      })
        .then((res) => res.json())
        .then((data) => setAdd(data));
    }
    window.location.reload();
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 text-center">
        <div className="row align-content-center" style={{ height: "100vh" }}>
          <div className="shadow-lg p-3 mb-5 rounded">
            <h3>Make Another Admin</h3>
            <div className="form-group m-3">
              <input
                type="text"
                className="form-control "
                placeholder="Email Address"
                onBlur={handleEmail}
              />
              <button
                type="button"
                className="btn btn-primary m-3"
                onClick={handleButton}
              >
                {" "}
                Make Admin{" "}
              </button>
              {add && <p className="text-success">Admin Added Successfully</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
