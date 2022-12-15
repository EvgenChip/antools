import { useState } from "react";

export const useApp = () => {
  const [loginActive, setLoginActive] = useState(false);
  const [signUpActive, setSignUpActive] = useState(false);
  const stateLoginActive = () => {
    setLoginActive(!loginActive);
  };
  const stateSignUpActive = () => {
    setSignUpActive(!signUpActive);
  };

  return {
    loginActive,
    setLoginActive,
    signUpActive,
    setSignUpActive,
    stateLoginActive,
    stateSignUpActive,
  };
};
