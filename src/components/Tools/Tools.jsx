import React, { useCallback } from "react";
import { Tool } from "./Tool/Tool";
import { PRODUCTS } from "../../products";

import "./tools.scss";

export const Tools = () => {
  const displayProducts = useCallback(
    (product) => <Tool key={product.id} product={product} />,
    []
  );

  return (
    <div className="tools">
      <div className="container">
        <h2 className="title">Most Popular Tools</h2>
        <p className="description ">
          Tools for the best Designers and Developers <br /> most popularly used
          in the world
        </p>
        <div className="tool__wrap">{PRODUCTS.map(displayProducts)}</div>
        <button className="tools__load">Load More</button>
      </div>
    </div>
  );
};
