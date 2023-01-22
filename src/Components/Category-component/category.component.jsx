import "./category.scss";

const Category = ({cat}) => {
  const { img, title } = cat;
  return (
    <div  className="category ">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <div className="info">
        <h2 className="title">{title}</h2>
        <p className="subtitle">Shop now</p>
      </div>
    </div>
  );
};

export default Category;
