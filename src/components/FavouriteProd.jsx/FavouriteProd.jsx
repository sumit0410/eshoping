import React, { useContext } from "react";
import Products from "../Products/Products";
import { Context } from "../../utils/context";

const FavouriteProd = () => {
  const { favItem } = useContext(Context);
  return (
    <div className="Fvt-prod">
      <Products products={favItem} />
    </div>
  );
};

export default FavouriteProd;
