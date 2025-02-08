import React from "react";
import firstImage from './first.jpg';
import secondImage from './second.jpg';
import thirdImage from './third.jpg';
import fourthImage from './four.jpg';
import './Hero.css';
import Button2 from "./Button2";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Experience Luxury Like Never Before</h1>
        <p className="hero-description">
          Discover the best rooms, facilities, and service that will make your
          stay unforgettable.
        </p>
        <div className="hero-buttons">
          <Button2 text="Explore Now" />
          <Button2 text="Socials" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
