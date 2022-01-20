import NavBar from "./NavBar";
import CartCard from "./CartCard";


const Cart = (props) => {
  return (
    <div>
      <NavBar />
      <h2>Shopping Cart</h2>
      <div className="CartMain">
        <div className="CartCards">
          <CartCard 
          products={props.products} 
          onChangeCartCount={props.onChangeCartCount} onClickRemove={props.onClickRemove}
          rerender={props.rerender}
          />
        </div>
      </div>
    </div>
  )
}

export default Cart;