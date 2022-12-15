import React, { useState } from "react";

import "./burger.scss";
import { BurgerActive } from "./BurgerActive";

export const Burger = () => {
  const [active, setActive] = useState(false);
  const displayBurger = () => {
    setActive(!active);
  };
  return (
    <div className="burger">
      {active && <BurgerActive />}
      <div onClick={displayBurger} className="burger__menu">
        <span className="burger__line"></span>
      </div>
    </div>
  );
};
