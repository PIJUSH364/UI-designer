import React from "react";
import "./Newsletter.css";

function Newsletter() {
  const handalesubmit = (e) => {
    e.preventDefault();
    alert('submit Successfull');
  };
  return (
    <div className="newsletter">
      <div className="newsletter-left"></div>
      <div className="newsletter-right">
        <div className="newsletter-description">
          <h1 className="pd-des">SUBSCRIBE</h1>
          <h2 className="pd-des">to our newsletter</h2>
          <p className="pd-des">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            reprehenderit maxime consequuntur.
          </p>
        </div>
        <form onSubmit={handalesubmit}>
          <input
            className="pd-form input-placeholder"
            type="text"
            name="fullName"
            placeholder="NAME"
          />
          <input
            className="pd-form input-placeholder"
            type="email"
            name="email"
            placeholder="your email"
          />
          <textarea
            className="pd-form input-placeholder"
            name="message"
            cols="20"
            rows="6"
            placeholder="MESSAGE"></textarea>
          <div className="button-box">
            <button type="submit" className=" button-message">
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
