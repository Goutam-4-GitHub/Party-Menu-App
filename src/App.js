// src/App.js
import React, { useState, useMemo } from "react";
import { Routes,Route } from "react-router-dom";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import IngredientDetail from "./components/IngredientDetail";
import dishes from "./data/mockDishes"; // ensure your mockDishes exports default



const CATEGORIES = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("MAIN COURSE");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);

  const filteredDishes = useMemo(() => {
    return dishes.filter((d) => {
      if (d.mealType !== selectedCategory) return false;
      if (searchTerm && !d.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      if ((!vegOnly && !nonVegOnly) || (vegOnly && nonVegOnly)) return true;
      if (vegOnly) return d.type === "VEG";
      if (nonVegOnly) return d.type === "NON-VEG";
      return true;
    });
  }, [selectedCategory, searchTerm, vegOnly, nonVegOnly]);

  const onAddDish = (id) => setSelectedDishes((p) => (p.includes(id) ? p : [...p, id]));
  const onRemoveDish = (id) => setSelectedDishes((p) => p.filter((x) => x !== id));
  const totalSelected = selectedDishes.length;

  const selectedCountsByCategory = useMemo(() => {
    const counts = {};
    CATEGORIES.forEach((cat) => {
      counts[cat] = selectedDishes.filter((id) => {
        const d = dishes.find((x) => x.id === id);
        return d && d.mealType === cat;
      }).length;
    });
    return counts;
  }, [selectedDishes]);

  function MainView() {
    return (
      <div className="app-container mobile-style">
        <h1 className="page-title">Party Menu Selection</h1>

        <Filters
          categories={CATEGORIES}
          activeCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          vegOnly={vegOnly}
          onVegOnlyChange={setVegOnly}
          nonVegOnly={nonVegOnly}
          onNonVegOnlyChange={setNonVegOnly}
          counts={selectedCountsByCategory}
        />

        <div className="selected-summary-row">
          <div className="selected-summary-text">
            {selectedCategory} Selected ({selectedCountsByCategory[selectedCategory] || 0})
          </div>
          <div className="toggles-inline">
            <label className="tiny-toggle">
              <input type="checkbox" checked={vegOnly} onChange={(e) => setVegOnly(e.target.checked)} />
              <span className="toggle-label">Veg</span>
            </label>
            <label className="tiny-toggle">
              <input type="checkbox" checked={nonVegOnly} onChange={(e) => setNonVegOnly(e.target.checked)} />
              <span className="toggle-label">Non-Veg</span>
            </label>
          </div>
        </div>

        <DishList
          dishes={filteredDishes}
          onAddDish={onAddDish}
          onRemoveDish={onRemoveDish}
          selectedDishes={selectedDishes}
        />

        {/* sticky bottom bar */}
        <div className="sticky-bottom">
          <div className="sticky-left">
            <div className="sticky-title">Total Dish Selected</div>
            <div className="sticky-count">{totalSelected}</div>
          </div>
          <button
            className="sticky-continue"
            onClick={() => {
              const names = selectedDishes.map((id) => dishes.find((d) => d.id === id)?.name).filter(Boolean);
              alert(`Selected (${totalSelected}):\n` + (names.length ? names.join("\n") : "No items selected"));
            }}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<MainView />} />
      <Route path="/ingredient/:id" element={<IngredientDetail dishes={dishes} />} />
    </Routes>
  );
}
