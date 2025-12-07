import FoodContainer from "./FoodContainer";

function CategorySection({ category, products }) {
  return (
    <div className="category-section">
      <div className="category" >
           <h3>{category.name}</h3>
      </div>
      <FoodContainer foods={products} />
    </div>
  );
}

export default CategorySection;