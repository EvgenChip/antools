import React, { useCallback, useState } from "react";

import "./newcomer.scss";

import { PRODUCTS } from "../../products";
import { Tool } from "../Tools/Tool/Tool";

export const NewcomerTools = () => {
  const newcomerProduct = PRODUCTS.slice(6, 10);

  const displayProducts = useCallback(
    (newcomerProduct) => (
      <Tool key={newcomerProduct.id} product={newcomerProduct} />
    ),
    []
  );

  return (
    <div className="newcomer-tools">
      <div className="container">
        <div className="newcomer-tools__inner">
          <div className="newcomer-tools__info">
            <h2 className="title">Newcomer Tools</h2>
            <p className="description">
              Wow! see the latest update of the most recommended tools from
              reliable designers and developers
            </p>
            <button className="button">Explore more</button>
          </div>
          <div className="newcomer-tools__wrap">
            {newcomerProduct.map(displayProducts)}
          </div>
        </div>
      </div>
    </div>
  );
};
