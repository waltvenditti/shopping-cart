import uniqid from "uniqid";
import React, { useState, useEffect } from "react";

const CartCard = (props) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartProducts = [];
    const products = props.products;
    for (let i = 0; i < products.length; i++) {
      if (products[i].count !== 0) {
        const newCartItem = {
          name: products[i].name,
          count: products[i].count,
          price: products[i].price,
          id: uniqid(),
        };
        newCartProducts.push(newCartItem);
      }
    }
    setCartProducts(newCartProducts);
  }, [props.rerender, props.products]);

  const getNumPrice = (price) => {
    const priceArray = price.split(" ");
    const numPrice = parseFloat(priceArray[0].slice(1));
    return numPrice;
  };

  const getTotalPrice = (cartProducts) => {
    let totalPrice = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      let price = getNumPrice(cartProducts[i].price);
      let count = parseInt(cartProducts[i].count)
      totalPrice += (count * price);
    }
    totalPrice = parseFloat(totalPrice.toFixed(2));
    return totalPrice;
  }
  
  useEffect(() => {
    const tPrice = getTotalPrice(cartProducts);
    setTotalPrice(tPrice);
  }, [props.rerender, props.products])

  return (
    <div className="AllCartCards">
      {cartProducts.map((cartProduct) => {
        return (
          <li className="SideCartList" key={cartProduct.id}>
            <div className="CartCard">
              <p>{cartProduct.name}</p>
              <form>
                <input
                  name={cartProduct.name}
                  type="number"
                  min="1"
                  defaultValue={cartProduct.count}
                  onChange={props.onChangeCartCount}
                />
                <span>gram(s)</span>
              </form>
              <p className="CartCardPrice">{cartProduct.price}</p>
              <button
                name={cartProduct.name}
                className="RemoveItem"
                onClick={props.onClickRemove}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })}
      <div className="CheckOut">
        <p>Total Price: ${getTotalPrice(cartProducts)}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartCard;
