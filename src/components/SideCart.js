import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

const SideCart = (props) => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const newCartProducts = [];
    const products = props.products;
    for (let i = 0; i < products.length; i++) {
      if (products[i].count !== 0) {
        const newCartItem = {
          name: products[i].name,
          count: products[i].count,
          id: uniqid(),
        };
        newCartProducts.push(newCartItem);
      }
    }
    setCartProducts(newCartProducts);
  }, [props.rerender, props.products])

  return (
    <div className="SideCart">
      <h4>Shopping Cart</h4>
      <div>
        {cartProducts.map((cartProduct) => {
          return <li key={cartProduct.id}><p>x {cartProduct.count}g {cartProduct.name}</p></li>
        })}
      </div>
      <Link to="/cart">
      <button id="SideCartButton">Edit Cart / Checkout</button>
      </Link>
    </div>
  )
}
export default SideCart;