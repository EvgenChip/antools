import React, { useState, useEffect, useCallback } from "react";

import { phoneIsValid, mailIsValid } from "../../../../utils.js";
import { sendFormPost } from "../../../../api/API";

export const useAuthorization = () => {
  const [userPassword, setUserPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Введите почту");
  const [phoneError, setPhoneError] = useState("Введите номер");
  const [loginValid, setLoginValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    emailError || phoneError || userPassword.length < 6
      ? setFormValid(false)
      : setFormValid(true);
  }, [emailError, phoneError, userPassword]);

  useEffect(() => {
    emailError || userPassword.length < 6
      ? setLoginValid(false)
      : setLoginValid(true);
  }, [emailError, userPassword]);

  const actionsAfterSend = useCallback(() => {
    setUserPassword("");
    setEmail("");
    setPhone("");

    setEmailDirty(false);
    setPhoneDirty(false);
    setLoginValid(false);
    setFormValid(false);
    setEmailError("Введите почту");
    setPhoneError("Введите номер");
  }, []);

  const sendForm = useCallback(async () => {
    try {
      await sendFormPost({
        phone,
        email,
        userPassword,
      });

      actionsAfterSend();
    } catch (error) {
      console.log("Sending error", error);
    }
  }, [phone, email, userPassword, actionsAfterSend]);

  const userPasswordHandler = useCallback(({ target }) => {
    setUserPassword(target.value);
  }, []);

  const phoneHandler = useCallback(({ target }) => {
    setPhone(target.value);

    phoneIsValid(target.value)
      ? setPhoneError("")
      : setPhoneError("Некорректный телефон");
  }, []);

  const emailHandler = useCallback(({ target }) => {
    setEmail(target.value);

    mailIsValid(target.value)
      ? setEmailError("")
      : setEmailError("Некорректный емейл");
  }, []);

  const blurHandler = useCallback(
    ({ target }) => {
      const inputNameAction = {
        email: () => setEmailDirty(true),
        phone: () => setPhoneDirty(true),
        password: () => setPasswordDirty(true),
      };

      inputNameAction[target.name]();
    },
    [setEmailDirty, setPhoneDirty]
  );

  return {
    userPassword,
    setUserPassword,
    email,
    setEmail,
    phone,
    setPhone,
    emailDirty,
    setEmailDirty,
    phoneDirty,
    setPhoneDirty,
    emailError,
    setEmailError,
    phoneError,
    setPhoneError,
    formValid,
    setFormValid,
    sendForm,
    userPasswordHandler,
    phoneHandler,
    emailHandler,
    blurHandler,
    loginValid,
    passwordDirty,
  };
};
