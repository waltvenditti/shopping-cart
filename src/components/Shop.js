import React, { setState } from 'react';

import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import SideCart from "./SideCart";

const Shop = () => {
  // store products in an array and feed them to ProductCards
  const [products, setProducts] = setState(0);
  return (
    <div>
      <NavBar />
      <p>SHOP PAGE</p>
      <div className="ShopMain">
        <div className="ShopCards">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <SideCart />
      </div>
    </div>
  );
};

export default Shop;
