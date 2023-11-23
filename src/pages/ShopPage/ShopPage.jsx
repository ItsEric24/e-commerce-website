import { useContext } from "react";
import { CategoryContext } from "../../context/category.context";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

function ShopPage() {
  const { categoriesMap } = useContext(CategoryContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}
export default ShopPage;
