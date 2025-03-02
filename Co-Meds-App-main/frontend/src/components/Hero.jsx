import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          We are dedicated to providing exceptional healthcare services with compassion and professionalism. Our team of experienced medical professionals is committed to delivering personalized care to every patient. With state-of-the-art facilities and advanced medical technologies, we ensure the highest standards of treatment and patient safety. Trust CoMeds Hospital for your health and well-being.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
