import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import {
  faCog,
  faSignOutAlt,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faPlus,
  faMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const adminMail = sessionStorage.getItem("email");
  useEffect(() => {
    fetch("https://tech-zone-server.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: adminMail }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);
  const handleLogOut = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard/admin" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        {isAdmin || (
          <li>
            <Link to="/orders" className="text-white">
              <FontAwesomeIcon icon={faPlus} /> <span>Orders</span>
            </Link>
          </li>
        )}
        {isAdmin && (
          <li>
            <Link to="/allOrders" className="text-white">
              <FontAwesomeIcon icon={faPlus} /> <span>All Orders</span>
            </Link>
          </li>
        )}
        {isAdmin || (
          <li>
            <Link to="/addReviews" className="text-white">
              <FontAwesomeIcon icon={faUserPlus} /> <span>Add Review</span>
            </Link>
          </li>
        )}
        {isAdmin && (
          <li>
            <Link to="/addServices" className="text-white">
              <FontAwesomeIcon icon={faUserPlus} /> <span>Add Services</span>
            </Link>
          </li>
        )}
        {isAdmin && (
          <li>
            <Link to="/makeAdmin" className="text-white">
              <FontAwesomeIcon icon={faMarker} /> <span>Make Admin</span>
            </Link>
          </li>
        )}
        {isAdmin && (
          <li>
            <Link to="/settings" className="text-white">
              <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
            </Link>
          </li>
        )}
      </ul>
      <div>
        <button
          type="button"
          class="btn btn-primary mx-1"
          onClick={handleLogOut}
        >
          <FontAwesomeIcon icon={faSignOutAlt} /> LogOut
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
