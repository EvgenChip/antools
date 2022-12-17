import React from "react";
import "./authorization.scss";
import { useAuthorization } from "./hooks/useAuthorization";
export const Login = ({ stateLoginActive }) => {
  const {
    userPassword,
    email,
    emailDirty,
    emailError,
    passwordDirty,
    loginValid,
    sendForm,
    userPasswordHandler,
    emailHandler,
    blurHandler,
  } = useAuthorization();

  const sendLoginForm = () => {
    sendForm();
    stateLoginActive();
  };

  return (
    <div className="modal modal--active">
      <div className="modal__inner ">
        <form className="modal__form" action="">
          <h2>Вход в личный кабинет</h2>
          <div className="mail mail__login">
            <label for="email">E-mail</label>
            <input
              value={email}
              onChange={emailHandler}
              onBlur={blurHandler}
              id="formEmail"
              type="text"
              name="email"
            />
          </div>
          <div className="password">
            <label for="password">Password</label>
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
          {userPassword.length < 6 && passwordDirty && (
            <div className="emailError">Пароль должен быть более 6 знаков</div>
          )}

          <button
            disabled={!loginValid}
            type="button"
            onClick={sendLoginForm}
            className="button">
            Войти
          </button>
          <button onClick={stateLoginActive} className="button">
            Отмена
          </button>
        </form>
      </div>
    </div>
  );
};
