import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://tech-zone-server.herokuapp.com/getReviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container mb-3">
      <h1 className="display-6 font-weight-bold text-center border">
        What Client Say?
      </h1>
      <div className="p-3">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          {reviews.map((review) => (
            <div>
              <img src={review.clientImg} alt="client" />
              <div className="myCarousel">
                <h3>{review.clientName}</h3>
                <h4>{review.clientEmail}</h4>
                <p>{review.clientReview}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
