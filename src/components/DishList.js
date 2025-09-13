// src/components/DishList.js
import React from "react";
import DishCard from "./DishCard";

export default function DishList({
  dishes = [],
  onAddDish,
  onRemoveDish,
  selectedDishes = []
}) {
  if (!dishes || dishes.length === 0) {
    return <div className="no-results">No dishes found.</div>;
  }

  // group by category name
  const grouped = dishes.reduce((acc, d) => {
    const key = (d.category && d.category.name) || "Other";
    acc[key] = acc[key] || [];
    acc[key].push(d);
    return acc;
  }, {});

  return (
    <div className="dish-list-mobile">
      {Object.keys(grouped).map((group) => (
        <div className="group-block" key={group}>
          <div className="group-header">
            <div className="group-title">{group}</div>
            <div className="group-count">{grouped[group].length}</div>
          </div>

          <div className="group-items">
            {grouped[group].map((d) => {
              const selected = selectedDishes.includes(d.id);
              return (
                <DishCard
                  key={d.id}
                  dish={d}
                  onAddDish={onAddDish}
                  onRemoveDish={onRemoveDish}
                  isSelected={selected}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
