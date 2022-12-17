import { useState, useCallback } from "react";

export const useApp = () => {
  const [loginActive, setLoginActive] = useState(false);
  const [signUpActive, setSignUpActive] = useState(false);

  const stateLoginActive = useCallback(() => {
    setLoginActive(!loginActive);
  }, [loginActive]);

  const stateSignUpActive = useCallback(() => {
    setSignUpActive(!signUpActive);
  }, [signUpActive]);

  return {
    loginActive,
    setLoginActive,
    signUpActive,
    setSignUpActive,
    stateLoginActive,
    stateSignUpActive,
  };
};
