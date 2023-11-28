import { useEffect } from "react";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { setCategories } from "../../store/categories/categories-reducer.js";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories-selector.js";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.js";

function ShopPage() {
  const categoriesArray = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <>
      {Object.keys(categoriesArray).map((title) => {
        const products = categoriesArray[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}
export default ShopPage;
