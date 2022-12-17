import React from "react";
import "./header.scss";
import logoIcon from "../../assets/image/logo.svg";

import { Burger } from "./Burger/Burger";
import { useHeader } from "./hooks/useHeader";
import { SelectActive } from "./Select";

export const Header = ({ stateLoginActive, stateSignUpActive }) => {
  const { selectActive, displaySelect } = useHeader();

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="logo">
            <img src={logoIcon} alt="" />
            <h1 className="logo_title">antools</h1>
          </div>
          <Burger />
          <ul className="header__menu">
            <li className="header__item">
              <a className="header__link" href="">
                Home
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="">
                Categories
              </a>
              <button
                onClick={displaySelect}
                className={selectActive ? "select-trans" : "select"}>
                <svg
                  width="12"
                  height="6"
                  viewBox="0 0 12 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.5 0.75L6 5.25L10.5 0.75"
                    stroke="white"
                    stroke-opacity="0.55"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li className="header__item">
              <a className="header__link" href="">
                My Collections
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="">
                Blog
              </a>
            </li>
            {selectActive && <SelectActive />}
          </ul>

          <div className="header__authorization">
            <button onClick={stateLoginActive} className="button">
              Login
            </button>
            <button onClick={stateSignUpActive} className="button">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
