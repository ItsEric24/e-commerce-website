import { CategoryTitle, CategoryContainer } from "./category.styles";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoryContext } from "../../context/category.context";
import ProductCard from "../../components/ProductCard/ProductCard";

function CategoryPage() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoryContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
}
export default CategoryPage;
