import Category from "../Category-component/category.component";
import categories from "../../utils/categories";
import './categories.scss'

const Categories = () => {
 
  return (
    <div className="categories ">
      <div className="wrapper container">
        {categories.map((categories) => (
          <Category key={categories.id} category={categories} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
