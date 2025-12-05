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
    }, 350); // длительность анимации закрытия
  };

  return (
    <>
      {/* ✅ Список блюд */}
      <div className="food-container">
        {foods.map((food, index) => (
          <div
            key={index}
            className="food"
            onClick={() => openWindow(food)}
          >
            <img src={food.image} alt={food.title} />
            <h3>{food.title}</h3>
            <p>{food.price}</p>
          </div>
        ))}
      </div>

      {/* ✅ Окно + фон + кнопка */}
     {activeFood && (
  <div className={`food-expanded ${closing ? "closing" : ""}`}>

    {/* ✅ Кнопка закрытия — ПРИКЛЕЕНА К ОКНУ */}
    <button
      className={`close-btn ${closing ? "closing" : ""}`}
      onClick={closeWindow}
    >
      ✕
    </button>

    {/* ✅ Само окно */}
    <div
      className={`food-expanded-content ${closing ? "closing" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <img src={activeFood.image} alt={activeFood.title} />
      <h2>{activeFood.title}</h2>
      <p>{activeFood.price}</p>

      <ul>
        {activeFood.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
)}

    </>
  );
}

export default FoodContainer;
