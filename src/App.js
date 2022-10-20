import categories from "./utils/categories";
import "./style.scss";

function App() {
  return (
    <div className="categories ">
      <div className="wrapper container">
        {categories.map(({ title, id, img }) => (
          <div key={id} className="category">
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
        ))}
      </div>
    </div>
  );
}

export default App;
