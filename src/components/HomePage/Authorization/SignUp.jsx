import React from "react";
import "./authorization.scss";
export const SignUp = ({ stateSignUpActive, sendSignUpForm }) => {
  return (
    <div className="modal modal--active">
      <div className="modal__inner ">
        <form className="modal__form" action="">
          <h2>Регистрация</h2>
          <div className="mail">
            <label for="email">Введите ваш e-mail</label>
            <input id="email" type="e-mail" />
          </div>
          <div className="phone">
            <label for="phone">Введите ваш номер</label>
            <input id="phone" type="phone" />
          </div>
          <div className="password">
            <label for="password">Придумайте пароль</label>
            <input id="password" type="password" />
          </div>
          <button onClick={() => sendSignUpForm()} className="button">
            Отправить
          </button>
          <button onClick={() => stateSignUpActive()} className="button">
            Отмена
          </button>
        </form>
      </div>
    </div>
  );
};
