import React from "react";
import "./authorization.scss";
import { useAuthorization } from "./hooks/useAuthorization";
export const SignUp = ({ stateSignUpActive }) => {
  const {
    userPassword,
    passwordDirty,
    email,
    phone,
    emailDirty,
    phoneDirty,
    emailError,
    phoneError,
    formValid,
    sendForm,
    userPasswordHandler,
    emailHandler,
    blurHandler,
    phoneHandler,
  } = useAuthorization();

  const getSignUp = () => {
    sendForm();
    stateSignUpActive();
  };
  return (
    <div className="modal modal--active">
      <div className="modal__inner ">
        <form className="modal__form" action="">
          <h2>Регистрация</h2>
          <div className="mail">
            <label for="email">Введите ваш e-mail</label>
            <input
              value={email}
              onChange={emailHandler}
              onBlur={blurHandler}
              id="formEmail"
              type="text"
              name="email"
            />
          </div>
          <div className="phone">
            <label for="phone">Введите ваш номер</label>
            <input
              value={phone}
              onChange={phoneHandler}
              onBlur={blurHandler}
              id="formPhone"
              type="tel"
              name="phone"
            />
          </div>
          <div className="password">
            <label for="password">Придумайте пароль</label>
            <input
              value={userPassword}
              onChange={userPasswordHandler}
              onBlur={blurHandler}
              name="password"
              id="password"
              type="password"
            />
          </div>
          {emailDirty && emailError && (
            <div className="emailError">{emailError}</div>
          )}
          {phoneDirty && phoneError && (
            <div className="emailError">{phoneError}</div>
          )}
          {userPassword.length < 6 && passwordDirty && (
            <div className="emailError">Пароль должен быть более 6 знаков</div>
          )}
          <button
            disabled={!formValid}
            type="button"
            onClick={getSignUp}
            className="button">
            Отправить
          </button>
          <button onClick={stateSignUpActive} className="button">
            Отмена
          </button>
        </form>
      </div>
    </div>
  );
};
