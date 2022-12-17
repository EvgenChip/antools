import React from "react";
import "./homePage.scss";

import searchIcon from "../../assets/image/search.svg";
import facebookIcon from "../../assets/image/facebookIcon.svg";
import instagramIcon from "../../assets/image/instagramIcon.svg";
import twitterIcon from "../../assets/image/twitterIcon.svg";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container">
        <h2 className="title">
          Awesome tools for <br />
          Designer & Developer.
        </h2>
        <p className="description">
          Antool is a web collection of information on paid or <br /> free
          Design and Development tools
        </p>
        <form className="form" action="">
          <img src={searchIcon} alt="" />
          <input
            placeholder="find more than 430+ tools..."
            className="form__search"
            type="search"
          />
          <button className="button button_search" type="submit">
            Search
          </button>
        </form>
        <div className="home-page__icon">
          <img src={facebookIcon} alt="" className="icon_facebook" />
          <img src={instagramIcon} alt="" className="icon_instagram" />
          <img src={twitterIcon} alt="" className="icon_twitter" />
        </div>
      </div>
    </div>
  );
};
