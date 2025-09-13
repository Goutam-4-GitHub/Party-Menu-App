// src/components/DishCard.js
import React, { useRef } from "react";
import { Link } from "react-router-dom";

/**
 * Mobile Figma-style Dish Card:
 * - image on right rounded
 * - floating Add button overlapping the image (bottom-right)
 * - description truncated with Read more
 * - veg/non-veg tiny badge
 * - ingredient link in orange
 * - robust image fallback via onError -> embedded SVG placeholder
 */
export default function DishCard({ dish, onAddDish, onRemoveDish, isSelected }) {
  const imgRef = useRef(null);

  const handleAdd = () => onAddDish && onAddDish(dish.id);
  const handleRemove = () => onRemoveDish && onRemoveDish(dish.id);

  // Unsplash-like attempt (may fail on some networks); fallback handled in onError
  const encode = (s = "") => encodeURIComponent((s || "").trim());
  const unsplashLike = dish?.name
    ? `https://images.unsplash.com/photo-1604908177522-33de7d0d2e12?auto=format&fit=crop&w=800&q=70&ixlib=rb-4.0.3&crop=entropy&sat=-30&blend=ffffff&blend-mode=normal&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8${encode(dish.name)}`
    : null;

  const initialSrc = dish?.image || dish?.category?.image || unsplashLike || "";

  const svgPlaceholder = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
      <rect width='100%' height='100%' fill='#f3f3f3'/>
      <text x='50%' y='50%' fill='#ccc' font-family='Arial' font-size='18' text-anchor='middle' dominant-baseline='middle'>No Image</text>
    </svg>`
  )}`;

  const handleImgError = () => {
    try {
      const el = imgRef.current;
      if (!el) return;
      if (el.src && el.src.startsWith("data:image/svg+xml")) return;
      el.src = svgPlaceholder;
    } catch {}
  };

  // truncated description with "Read more" placeholder (no expand behavior needed)
  const shortDesc = dish.description && dish.description.length > 110 ? dish.description.slice(0, 110) + "..." : dish.description;

  const vegBadge = dish.type === "VEG" ? "🟢" : dish.type === "NON-VEG" ? "🔴" : null;

  return (
    <div className={`dish-card-mobile ${isSelected ? "selected" : ""}`}>
      <div className="card-main">
        <div className="card-text">
          <div className="card-title-row">
            <h3 className="card-title">{dish.name}</h3>
            <div className="dish-type-badge">{vegBadge}</div>
          </div>

          <div className="card-desc">
            <span>{shortDesc} {dish.description && dish.description.length > 110 ? <strong className="read-more">Read more</strong> : null}</span>
          </div>

          <div className="card-actions-row">
            <Link to={`/ingredient/${dish.id}`} className="ingredient-link-mobile">🧾 Ingredient</Link>
          </div>
        </div>

        <div className="card-image-wrap">
          <img ref={imgRef} src={initialSrc} alt={dish.name} onError={handleImgError} />
        </div>

        {/* floating add/remove button */}
        <div className="floating-action">
          {isSelected ? (
            <button className="floating-remove" onClick={handleRemove}>Remove</button>
          ) : (
            <button className="floating-add" onClick={handleAdd}>Add <span className="plus">+</span></button>
          )}
        </div>
      </div>
    </div>
  );
}
