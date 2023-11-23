import DirectoryItem from "../../components/DirectoryItem/DirectoryItem";
import "./../../categories.scss";
import { categories } from "../../categoriesData";

function Home() {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
export default Home;
