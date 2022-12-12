import React from "react";
import "./authorization.scss";
export const Login = ({ stateLoginActive, sendLoginForm }) => {
  return (
    <div className="modal modal--active">
      <div className="modal__inner ">
        <form className="modal__form" action="">
          <h2>Вход в личный кабинет</h2>
          <div className="mail">
            <label for="email">E-mail</label>
            <input id="email" type="e-mail" />
          </div>
          <div className="password">
            <label for="password">Password</label>
            <input id="password" type="password" />
          </div>
          <button onClick={() => sendLoginForm()} className="button">
            Войти
          </button>
          <button onClick={() => stateLoginActive()} className="button">
            Отмена
          </button>
        </form>
      </div>
    </div>
  );
};
