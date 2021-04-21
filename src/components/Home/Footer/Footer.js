import { Link } from '@material-ui/core';
import React from 'react';

const Footer = () => {
    return (
            <footer class="bg-light text-center text-lg-start">
        <div class="container p-4">;
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Tech<span className="text-danger display-6">ZONE</span></h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
              molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
              voluptatem veniam, est atque cumque eum delectus sint!
            </p>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Useful Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link href="/" className="text-dark">Home</Link>
              </li>
              <li>
                <Link href="#!" className="text-dark">Services</Link>
              </li>
              <li>
                <Link href="#!" className="text-dark">About</Link>
              </li>
              <li>
                <Link href="#!" className="text-dark">Admin</Link>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-dark">Address</Link>
              </li>
              <li>
                <Link href="/" className="text-dark">Contact Us</Link>
              </li>
              <li>
                <Link href="/" className="text-dark">Reviews</Link>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
        </div>
        
        {/*Grid row*/}
      </div>
      <div className="copyRight text-center">
                    <p className="border p-4">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
        </footer>
    );
};

export default Footer;