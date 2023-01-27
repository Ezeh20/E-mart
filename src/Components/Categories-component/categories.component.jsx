import Category from "../Category-component/category.component";
import categories from "../../utils/categories";
import "./categories.scss";
import Containerthree from "../Containers/ContainerThree";

const Categories = () => {
  return (
    <div className="ssbb">
      <Containerthree>
        <div className="wrapper">
          {categories.map((cat) => {
            return <Category key={cat.id} cat={cat} />;
          })}
        </div>
      </Containerthree>
    </div>
  );
};

export default Categories;
