// src/components/IngredientDetail.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

/**
 * IngredientDetail - improved layout:
 * - safe fallback for image
 * - semantic markup for ingredient rows (left name, right qty)
 * - provides CSS hooks for overlapping image on the right
 */
export default function IngredientDetail({ dishes = [] }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dishId = Number(id);
  const dish = dishes.find((d) => d.id === dishId);

  if (!dish) {
    return (
      <div className="app-container ingredient-page">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        <h2>Dish not found</h2>
      </div>
    );
  }

  // image fallback: dish.image -> category.image -> embedded SVG
  const safeImage = dish.image || dish.category?.image || `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='420' height='320'><rect width='100%' height='100%' fill='#f3f3f3'/><text x='50%' y='50%' fill='#ccc' font-family='Arial' font-size='18' text-anchor='middle' dominant-baseline='middle'>No Image</text></svg>`
  )}`;

  return (
    <div className="app-container ingredient-page mobile-ingredient">
      <div className="ingredient-top">
        <button className="back-btn" onClick={() => navigate(-1)}>←</button>
        <div className="ingredient-title">Ingredient list</div>
      </div>

      <div className="ingredient-grid fixed-image-layout">
        {/* LEFT column - will have padding-right so text doesn't collide with image */}
        <div className="ingredient-left content-with-image">
          <h2 className="dish-name">{dish.name}</h2>
          <p className="dish-desc">{dish.description}</p>

          <h3 className="ing-header">Ingredients</h3>
          <div className="ing-sub">For 2 people</div>

          <ul className="ingredients-list-vertical">
            {dish.ingredients && dish.ingredients.length ? (
              dish.ingredients.map((ing, idx) => (
                <li key={idx} className="ing-row two-col">
                  <span className="ing-name">{ing.name}</span>
                  <span className="ing-qty">{ing.quantity}</span>
                </li>
              ))
            ) : (
              <li className="ing-row">No ingredients available.</li>
            )}
          </ul>
        </div>

        {/* RIGHT image - absolutely positioned on top-right on narrow/mobile to overlap */}
        <div className="ingredient-right image-floating">
          <div className="image-frame">
            <img src={safeImage} alt={dish.name} onError={(e) => { e.target.src = `data:image/svg+xml;utf8,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='420' height='320'><rect width='100%' height='100%' fill='#f3f3f3'/><text x='50%' y='50%' fill='#ccc' font-family='Arial' font-size='18' text-anchor='middle' dominant-baseline='middle'>No Image</text></svg>")}`; }} />
          </div>
        </div>
      </div>
    </div>
  );
}
