import React from "react";

import { PARTNERS } from "../../partners";
import "./partners.scss";
export const Partners = () => {
  return (
    <div className="partners">
      <div className="container">
        <div className="partners__wrap">
          <h2 className="title">Trusted more than 150+ brand</h2>
          <div className="partners__inner">
            {PARTNERS.map(({ id, logo }) => (
              <div key={id} className="partner">
                <img src={logo} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
