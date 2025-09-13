// src/components/Filters.js
import React from "react";

/**
 * Mobile-first Filters:
 * - Rounded search with icon
 * - Pill tabs with badge counts
 */
export default function Filters({
  categories,
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegOnly,
  onVegOnlyChange,
  nonVegOnly,
  onNonVegOnlyChange,
  counts = {}
}) {
  return (
    <div className="filters mobile-filters">
      <div className="search-wrap">
        <button className="search-back" type="button">◀</button>
        <div className="search-input-wrap">
          <input
            type="text"
            placeholder="Search dish for your party......"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button className="search-icon" aria-hidden>🔍</button>
        </div>
      </div>

      <div className="tabs-mobile">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-mobile ${activeCategory === cat ? "active" : ""}`}
            onClick={() => onCategoryChange(cat)}
            type="button"
          >
            <span className="tab-mobile-label">{cat.split(" ").join("\u00A0")}</span>
            <span className="tab-mobile-badge">{counts[cat] ?? 0}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
