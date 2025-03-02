import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h3>About Us</h3>
          <p>
          At CoMeds Hospital, we are a leading healthcare provider dedicated to offering comprehensive medical services with a focus on patient-centered care. Our team of skilled professionals is committed to delivering high-quality treatments using the latest medical technologies. We prioritize your health and well-being, ensuring you receive the best possible care in a compassionate and supportive environment. Trust coMeds Hospital for all your healthcare needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
