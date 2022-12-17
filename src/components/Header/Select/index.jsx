import React from "react";

import "./select.scss";
export const SelectActive = () => {
  return (
    <div className="select-active">
      <ul className="select-active__menu">
        <li className="select-active__item">
          <a className="select-active__link" href="">
            Design
          </a>
        </li>
        <li className="select-active__item">
          <a className="select-active__link" href="">
            Development
          </a>
        </li>
      </ul>
    </div>
  );
};
