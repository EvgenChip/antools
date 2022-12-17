import React from "react";

import "./burgerActive.scss";
export const BurgerActive = () => {
  return (
    <div className="burger-active" id="burger">
      <ul className="burger-active__menu">
        <li className="burger-active__item">
          <a className="burger-active__link" href="#">
            Home
          </a>
        </li>
        <li className="burger-active__item">
          <a className="burger-active__link" href="#">
            Categories
          </a>
        </li>
        <li className="burger-active__item">
          <a className="burger-active__link" href="#">
            My Collections
          </a>
        </li>
        <li className="burger-active__item">
          <a className="burger-active__link" href="#">
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
};
