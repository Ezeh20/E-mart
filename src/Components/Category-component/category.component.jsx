import "./category.scss";
import { useNavigate } from "react-router-dom";

const Category = ({ cat }) => {
  const { img, title, route } = cat;
  const navigate = useNavigate()

  const onClick = () => {
    navigate(route)
  }
  return (
    <div className="category" onClick={onClick}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <div className="info" >
        <h2 className="title">{title}</h2>
        <p className="subtitle">Shop now</p>
      </div>
    </div>
  );
};

export default Category;
