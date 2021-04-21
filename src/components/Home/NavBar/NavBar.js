import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const userName = sessionStorage.getItem('displayName');
  const handleLogOut = () => {
    sessionStorage.clear();
    window.location.reload();
  }
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div className="container-fluid mx-5 ">
    <a className="navbar-brand" href="#">Tech  <span className="text-danger display-6"> ZONE</span></a>
    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link mx-2 active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#">Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#">Contacts</a>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/admin" className="nav-link mx-2" href="#">Admin</Link>
        </li>
      </ul>
      {sessionStorage.getItem('displayName') ? <button type="button" class="btn btn-primary mx-1" onClick={handleLogOut}>{userName}</button>  : <Link to="/login"><button type="button" class="btn btn-primary mx-1">Login</button></Link> }
    </div>
  </div>
</nav>

    );
};

export default NavBar;