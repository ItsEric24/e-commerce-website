/* eslint-disable react/prop-types */
import "./Products.scss";
import Button from "../Button/Button";

function ProductCard({ produt }) {
  const { name, price, imageUrl } = produt;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="product-image" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
}
export default ProductCard;
