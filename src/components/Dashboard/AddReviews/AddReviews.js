import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const AddReviews = () => {
  const [imageLink, setImageLink] = useState("");
  const [add, setAdd] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const serviceData = {
      clientName: data.clientName,
      clientImg: imageLink,
      clientEmail: data.clientEmail,
      clientReview: data.clientReview,
    };
    fetch("https://tech-zone-server.herokuapp.com/addReviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((data) => {
        setAdd(true);
        console.log(data);
      });
  };

  const handleImageUpload = (e) => {
    console.log("in handle upload");
    const imgData = new FormData();
    imgData.set("key", "9918c28a385971bf9ee2e991e8d4e298");
    imgData.append("image", e.target.files[0]);
    console.log(imgData);
    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then((res) => setImageLink(res.data.data.display_url))
      .catch((error) => console.log(error));
  };
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 text-center">
        <div className="row align-content-center" style={{ height: "100vh" }}>
          <h3>Sent Us Your Feedbacks</h3>
          <div className="shadow-lg p-3 mb-5 rounded">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                class="form-control form-control-lg mt-3"
                type="text"
                placeholder="Enter Your Name"
                id="clientName"
                {...register("clientName")}
              ></input>

              <input
                class="form-control form-control-lg mt-3"
                type="email"
                placeholder="you@exapmple.com"
                id="clientEmail"
                {...register("clientEmail")}
              ></input>
              <input
                class="form-control form-control-lg mt-3"
                type="file"
                onChange={handleImageUpload}
              />
              <div class="mb-3 mt-3">
                <textarea
                  class="form-control"
                  id="clientReview"
                  rows="3"
                  {...register("clientReview")}
                ></textarea>
              </div>

              <input type="submit" />
              {add ?? <p className="text-success">Data Added SuccessFully</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;
