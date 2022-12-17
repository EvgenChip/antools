import React from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { Login } from "./components/HomePage/Authorization/LogIn";
import { SignUp } from "./components/HomePage/Authorization/SignUp";
import { Tools } from "./components/Tools";
import { Partners } from "./components/Partners";
import { NewcomerTools } from "./components/NewcomerTools";
import { Review } from "./components/Review";
import { Footer } from "./components/Footer";
import { Request } from "./components/Request";
import { useApp } from "./hooks/useApp";

function App() {
  const { loginActive, signUpActive, stateLoginActive, stateSignUpActive } =
    useApp();

  return (
    <div>
      <Header
        stateLoginActive={stateLoginActive}
        stateSignUpActive={stateSignUpActive}
      />
      <HomePage />
      {loginActive && <Login stateLoginActive={stateLoginActive} />}
      {signUpActive && <SignUp stateSignUpActive={stateSignUpActive} />}

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
