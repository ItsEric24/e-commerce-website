/* eslint-disable react/prop-types */
import ProductCard from "../ProductCard/ProductCard";
import {
  CategoryPreviewContainer,
  CategoryPreviews,
  CategoryTitle,
} from "./category-preview";

function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={`/shop/${title}`}>
          {title.toUpperCase()}
        </CategoryTitle>
      </h2>
      <CategoryPreviews>
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </CategoryPreviews>
    </CategoryPreviewContainer>
  );
}
export default CategoryPreview;
