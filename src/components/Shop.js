import React, { useState } from 'react';

import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import SideCart from "./SideCart";

const Shop = (props) => {
  return (
    <div className="ShopDiv">
      <NavBar />
      <h2>Store</h2>
      <div className="ShopMain">
        <div className="ShopCards">
          <h3>Common Stimulants</h3>
          <ProductCard product={props.products[0]} onClickAdd={props.onClickAdd}/>
          <ProductCard product={props.products[1]} onClickAdd={props.onClickAdd}/>
          <h3>Nootropic Chemicals</h3>
          <ProductCard product={props.products[2]} onClickAdd={props.onClickAdd}/>
          <ProductCard product={props.products[3]} onClickAdd={props.onClickAdd}/>
          <ProductCard product={props.products[4]} onClickAdd={props.onClickAdd}/>
          <h3>Nootropic Herbs (dried powder)</h3>
          <ProductCard product={props.products[5]} onClickAdd={props.onClickAdd}/>
          <ProductCard product={props.products[6]} onClickAdd={props.onClickAdd}/>
          <ProductCard product={props.products[7]} onClickAdd={props.onClickAdd}/>
        </div>
        <SideCart rerender={props.rerender} products={props.products}/>
      </div>
    </div>
  );
};

export default Shop;
