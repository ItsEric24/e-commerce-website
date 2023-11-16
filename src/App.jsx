import "./categories.scss";
import Category from "./components/Category/category";
import { categories } from "./categoriesData";

function App() {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}

export default App;
