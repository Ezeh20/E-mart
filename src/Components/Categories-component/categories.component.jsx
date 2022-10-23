import Category from "../Category-component/category.component";
import categories from "../../utils/categories";
import "./categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="wrapper container">
        {categories.map((cat) => {
          return <Category category={cat} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
