import { useState } from "react";

function FoodContainer({ foods }) {
  const [activeFood, setActiveFood] = useState(null);
  const [closing, setClosing] = useState(false);

  const openWindow = (food) => {
    setActiveFood(food);
    setClosing(false);
  };

  const closeWindow = () => {
    setClosing(true);
    setTimeout(() => {
      setActiveFood(null);
      setClosing(false);
    }, 350);
  };

  const getImageUrl = (imageName) => `http://localhost:5000/images/${imageName}`;

  return (
    <>
      <div className="food-container">
        {foods.map((food) => (
          <div key={food.product_id} className="food" onClick={() => openWindow(food)}>
            <img src={getImageUrl(food.image)} alt={food.name} />
            <h3>{food.name}</h3>
            <p>{food.price} грн</p>
          </div>
        ))}
      </div>

      {activeFood && (
        <div className={`food-expanded ${closing ? "closing" : ""}`} onClick={closeWindow}>
          <button className={`close-btn ${closing ? "closing" : ""}`} onClick={closeWindow}>
            ✕
          </button>

          <div className={`food-expanded-content ${closing ? "closing" : ""}`} onClick={(e) => e.stopPropagation()}>
            <img src={getImageUrl(activeFood.image)} alt={activeFood.name} />
            <h2>{activeFood.name}</h2>
            <p>Ціна: {activeFood.price} грн</p>
            <p>Вага: {activeFood.weight} г</p>
            <p>{activeFood.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default FoodContainer;



