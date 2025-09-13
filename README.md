#  Party Menu Selection App

A **ReactJS application** for selecting party dishes with filters, search, and detailed ingredient views.  
This project is built as part of a frontend assignment and follows Figma-inspired UI for mobile and desktop.

---

##  Features

- **Dish Listing by Category**
  - Organized into **Starter, Main Course, Dessert, and Sides**.
  - Each dish shows name, type (Veg/Non-Veg), description, and image.

- **Filters & Search**
  - Filter dishes by category.
  - Toggle **Veg / Non-Veg only**.
  - Search dishes by name.

- **Dish Selection**
  - Add/Remove dishes with clear UI.
  - Selected dishes count shown per category.
  - Sticky bottom summary shows total selected dishes.

- **Ingredient Detail**
  - View complete **ingredient list** for each dish.
  - Dedicated screen with large image and responsive layout.
  - Safe image fallback if dish images are missing.

- **Responsive UI**
  - Mobile-first design with Figma-style card layout.
  - Tablet/Desktop layout supported with media queries.

---

##  Screens

1. **Main Dish List** (with filters & categories)  
2. **Ingredient Detail Page** (detailed view of a dish)  
3. **Sticky Bottom Summary Bar** (total selected dishes)  

---

##  Project Structure

\\\
src/
 App.js                  # Root app, routing, state handling
 App.css                 # Responsive styles (mobile-first)

 components/
    DishCard.js         # Individual dish card UI
    DishList.js         # List of dishes, grouped by category
    Filters.js          # Tabs, search, and veg/non-veg filters
    IngredientDetail.js # Full-page ingredient detail view
    IngredientModal.js  # Modal-based ingredient detail (optional)

 data/
     mockDishes.js       # Mock dish data with 30+ items
\\\

---

##  Tech Stack

- **ReactJS** (functional components + hooks)
- **React Router v6** (for navigation)
- **LocalStorage** (to persist selected dishes)
- **CSS (mobile-first, responsive with media queries)**

---



##  Key Files Explained

- **App.js**  Handles routing (/ for dishes, /ingredient/:id for detail). Maintains selection state and filtering logic.  
- **DishCard.js**  Displays dish info, image, and Add/Remove button. Includes fallback image handling.  
- **DishList.js**  Groups dishes by category and maps them into DishCards.  
- **Filters.js**  Renders category tabs, search bar, and veg/non-veg toggles.  
- **IngredientDetail.js**  Displays detailed view of a dish with ingredients and large image.  
- **IngredientModal.js**  Alternative modal-based view for ingredients.  
- **mockDishes.js**  Sample dataset with 30+ dishes including Starters, Main Course, Dessert, and Sides.

---

##  Future Improvements

- Pagination / infinite scroll for long dish lists.  
- API integration instead of mock data.  
- Multi-language dish names (e.g., Hindi, Bengali fields already in dataset).  
- Improved accessibility (ARIA roles, screen reader labels).  

---

##  Author

Developed by **Goutam Prasad**  
 [LinkedIn](www.linkedin.com/in/goutamprasad04) | [GitHub](https://github.com/Goutam-4-GitHub)

