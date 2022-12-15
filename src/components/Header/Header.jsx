import React from "react";
import "./header.scss";
import logoIcon from "../../assets/image/logo.svg";
import { Login } from "../HomePage/Authorization/LogIn";
import { Burger } from "./Burger/Burger";

export const Header = ({ stateLoginActive, stateSignUpActive }) => {
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
