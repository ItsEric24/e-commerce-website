import { useContext } from "react";
import { ProductContext } from "../../context/products.context";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ShopPage.scss";

function ShopPage() {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard key={product.id} produt={product} />
        </div>
      ))}
    </div>
  );
}
export default ShopPage;
