import Category from "../../components/Category/category";
import "./../../categories.scss";
import { categories } from "../../categoriesData";

function Home() {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}
export default Home;
