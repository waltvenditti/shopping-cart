const ProductCard = (props) => {
  return (
    <div className="ProductCard">
      <p>{props.product.name}</p>
      <img src={props.product.img} alt={props.product.name} height="100px" />
      <p>{props.product.price}</p>
      <form>
        <input
          name={props.product.name}
          type="number"
          min="0"
          defaultValue="1"
        />
        <span>gram(s)</span>
        <button type="button" onClick={props.onClickAdd}>
          Add to Cart
        </button>
      </form>
    </div>
  );
};

export default ProductCard;
