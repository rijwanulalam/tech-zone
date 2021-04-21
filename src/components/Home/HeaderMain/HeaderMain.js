import React from "react";


const HeaderMain = () => {
  return (
    <div className="p-5 text-center bg-image"
      style={{
        backgroundImage:
          'url("https://mdbcdn.b-cdn.net/img/new/slides/041.jpg")',
        height: "400px",
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <p className="mb-3 display-6">Any Electronics Problem?</p>
            <p className="mb-3 display-5 font-weight-bold">WE WILL HELP</p>
            <a className="btn btn-outline-light btn-lg" href="#!" role="button">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
