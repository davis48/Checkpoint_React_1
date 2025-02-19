import React from "react";
import product from "../product";

const Image = () => <img src={product.image} alt={product.name} className="img-fluid" />;

export default Image;
