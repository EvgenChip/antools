import logo from "./logo.svg";
import React from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { HomePage } from "./components/HomePage/HomePage";
import { Login } from "./components/HomePage/Authorization/LogIn";
import { useCallback, useState } from "react";
import { SignUp } from "./components/HomePage/Authorization/SignUp";
import { Tools } from "./components/Tools/Tools";
import { Partners } from "./components/Partners/Partners";
import { NewcomerTools } from "./components/NewcomerTools/NewcomerTools";
import { Review, Slider } from "./components/review/Review";
import { Footer } from "./components/Footer/Footer";
import { Request } from "./components/Request/Request";

function App() {
  const [loginActive, setLoginActive] = useState(false);
  const stateLoginActive = () => {
    setLoginActive(!loginActive);
  };

  const sendLoginForm = () => {
    stateLoginActive();
  };

  const [signUpActive, setSignUpActive] = useState(false);
  const stateSignUpActive = () => {
    setSignUpActive(!signUpActive);
  };

  const sendSignUpForm = () => {
    stateSignUpActive();
  };

  return (
    <div>
      <Header
        stateSignUpActive={stateSignUpActive}
        stateLoginActive={stateLoginActive}
      />
      <HomePage />
      {loginActive && (
        <Login
          stateLoginActive={stateLoginActive}
          sendLoginForm={sendLoginForm}
        />
      )}

      {signUpActive && (
        <SignUp
          stateSignUpActive={stateSignUpActive}
          sendSignUpForm={sendSignUpForm}
        />
      )}

      <Tools />
      <Partners />
      <NewcomerTools />
      <Review />
      <Request />
      <Footer />
    </div>
  );
}

export default App;
