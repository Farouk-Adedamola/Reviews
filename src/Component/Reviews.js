import React, { useState } from "react";
import reviews from "../data";
import "./Reviews.css";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex(() => {
      let newPerson = index + 1;

      return checkNumber(newPerson);
    });
  };

  const prevPerson = () => {
    setIndex(() => {
      let lastPerson = index - 1;
      return checkNumber(lastPerson);
    });
  };

  const randomPerson = () => {
    let random = Math.floor(Math.random() * reviews.length);
    if (random === index) {
      random = index + 1;
    }
    return setIndex(checkNumber(random));
  };
  return (
    <article>
      <section className="section">
        <div className="img-container">
          <img src={image} alt="name" className="img" />
          <span className="quote-icon">
            <FaQuoteRight className="icon-animate" />
          </span>
        </div>
        <div className="name-container">
          <h3>{name}</h3>
          <h4>{job}</h4>
        </div>
        <p>{text}</p>
        <div className="btn">
          <button className="left-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="right-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" type="button" onClick={randomPerson}>
          random user
        </button>
      </section>
    </article>
  );
};

export default Reviews;
