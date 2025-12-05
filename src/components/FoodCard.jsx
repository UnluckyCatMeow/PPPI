import React from "react";

function FoodCard({ image, title, price }) {
  return (
   <div className="food">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h4>Ціна: {price}</h4>
    </div>
  );
}

export default FoodCard;