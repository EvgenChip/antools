import React from "react";

import "./requst.scss";
export const Request = () => {
  return (
    <div className="request">
      <div className="container">
        <div className="request__content">
          <h2 className="title">Become a contributor?</h2>
          <p className="description">
            Join us and get tips & tricks to become a great <br /> Designer and
            Developer
          </p>
          <form className="form" action="">
            <input
              placeholder="Enter your email..."
              className="form__search"
              type="email"
            />
            <button className="button button_search" type="submit">
              Join Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
