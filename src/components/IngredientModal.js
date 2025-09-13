import React from "react";

export default function IngredientModal({ dish, onClose }) {
  if (!dish) return null;
  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}></button>
        <div className="modal-body">
          <div className="modal-left">
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>

            <h3>Ingredients</h3>
            <ul className="ingredients-list">
              {dish.ingredients.map((ing, idx) => (
                <li key={idx}>
                  <span className="ing-name">{ing.name}</span>
                  <span className="ing-qty">{ing.quantity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-right">
            <img
              src={dish.image || "https://placehold.co/300x180?text=Dish"}
              alt={dish.name}
              style={{ width: "100%", borderRadius: 8 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
