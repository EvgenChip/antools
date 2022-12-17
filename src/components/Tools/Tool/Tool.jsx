import React from "react";

import addIcon from "../../../assets/image/card-icons/icons_add-outline.svg";
import "./tool.scss";
export const Tool = ({ product }) => {
  const { img, name, description, subscription } = product;

  return (
    <div className="tool">
      <div className="tool__card">
        <div className="tool__card-top">
          <img url className="tool__card-logo" src={img} alt="" />
          <div className="tool__card-info">
            <h3 className="tool__card-title">{name}</h3>
            <p className="tool__card-subscription">{subscription}</p>
          </div>
        </div>
        <p className="tool__card-description">{description}</p>
        <div className="tool__card-bottom">
          <div className="tool__card-icons">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                className="like-icon"
                d="M19.8333 5.25C17.3833 5.25 15.225 6.475 14 8.4C12.775 6.475 10.6167 5.25 8.16666 5.25C4.31666 5.25 1.16666 8.4 1.16666 12.25C1.16666 19.1917 14 26.25 14 26.25C14 26.25 26.8333 19.25 26.8333 12.25C26.8333 8.4 23.6833 5.25 19.8333 5.25Z"
                fill="white"
                fill-opacity="0.38"
              />
            </svg>
            <img src={addIcon} alt="" />
          </div>
          <button className="button ">Visit</button>
        </div>
      </div>
    </div>
  );
};
