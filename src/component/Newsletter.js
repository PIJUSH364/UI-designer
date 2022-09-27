import React from "react";
import "./Newsletter.css";
function Newsletter() {
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
        <form>
          <input
            className="pd-form input-placeholder"
            type="text"
            placeholder="NAME"
          />
          <input
            className="pd-form input-placeholder"
            type="MAIL"
            name=""
            id=""
            placeholder="your email"
          />
          <textarea
            className="pd-form input-placeholder"
            name=""
            id=""
            cols="20"
            rows="6"
            placeholder="MESSAGE"
          ></textarea>
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
