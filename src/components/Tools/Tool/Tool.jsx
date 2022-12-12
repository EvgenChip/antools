import React from "react";

import addIcon from "../../../assets/image/card-icons/icons_add-outline.svg";
import likeIcon from "../../../assets/image/card-icons/icons_like.svg";
import "./tool.scss";
export const Tool = ({ product }) => {
  const { id, img, name, description, subscription } = product;
  return (
    <div className="tool">
      <div key={id} className="tool__card">
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
            <img src={likeIcon} alt="" />
            <img src={addIcon} alt="" />
          </div>
          <button className="button ">Visit</button>
        </div>
      </div>
    </div>
  );
};
