// src/data/mockDishes.js

// --- DISHES DATA ---
const dishes = [
  // --- MAIN COURSE (30 Kadhai Paneer items) ---
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: null, // you can add Unsplash URLs if needed
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: 1,
    name: "Kadhai Paneer 1",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Onion", quantity: "1 pc" },
      { name: "Capsicum", quantity: "1 pc" }
    ]
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: null,
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: 2,
    name: "Kadhai Paneer 2",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Tomato", quantity: "1 pc" },
      { name: "Spices", quantity: "10g" }
    ]
  },

  // continue this structure for id: 3 → id: 30
  ...Array.from({ length: 28 }, (_, i) => ({
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: null,
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    id: i + 3,
    name: `Kadhai Paneer ${i + 3}`,
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Onion", quantity: "2 pcs" },
      { name: "Capsicum", quantity: "1 pc" }
    ]
  })),

  // --- STARTERS ---
  {
    categoryId: 2,
    mealType: "STARTER",
    type: "VEG",
    description: "Crispy vegetable spring rolls.",
    image: null,
    category: {
      id: 2,
      name: "Chinese",
      image: "https://placehold.co/140x100?text=Chinese",
      isRecommendedForMealSuggestion: true
    },
    dishType: "SNACK",
    forChefit: true,
    forParty: true,
    id: 101,
    name: "Spring Rolls",
    ingredients: [
      { name: "Cabbage", quantity: "100g" },
      { name: "Carrot", quantity: "50g" }
    ]
  },
  {
    categoryId: 2,
    mealType: "STARTER",
    type: "NON-VEG",
    description: "Sauteed prawns in garlic butter.",
    image: null,
    category: {
      id: 2,
      name: "Seafood",
      image: "https://placehold.co/140x100?text=Seafood",
      isRecommendedForMealSuggestion: true
    },
    dishType: "SEAFOOD",
    forChefit: true,
    forParty: true,
    id: 102,
    name: "Garlic Prawns",
    ingredients: [
      { name: "Prawns", quantity: "200g" },
      { name: "Garlic", quantity: "10g" }
    ]
  },

  // --- DESSERT ---
  {
    categoryId: 3,
    mealType: "DESSERT",
    type: "VEG",
    description: "Classic milk dumplings in syrup.",
    image: null,
    category: {
      id: 3,
      name: "Dessert",
      image: "https://placehold.co/140x100?text=Dessert",
      isRecommendedForMealSuggestion: true
    },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    id: 201,
    name: "Gulab Jamun",
    ingredients: [
      { name: "Milk solids", quantity: "150g" },
      { name: "Sugar syrup", quantity: "100ml" }
    ]
  },

  // --- SIDES ---
  {
    categoryId: 4,
    mealType: "SIDES",
    type: "VEG",
    description: "Spicy tossed potato fries.",
    image: null,
    category: {
      id: 4,
      name: "Sides",
      image: "https://placehold.co/140x100?text=Sides",
      isRecommendedForMealSuggestion: true
    },
    dishType: "SNACK",
    forChefit: true,
    forParty: true,
    id: 301,
    name: "Masala Fries",
    ingredients: [
      { name: "Potato", quantity: "200g" },
      { name: "Masala", quantity: "10g" }
    ]
  },
  {
    categoryId: 4,
    mealType: "SIDES",
    type: "NON-VEG",
    description: "Crispy chicken bites.",
    image: null,
    category: {
      id: 4,
      name: "Sides",
      image: "https://placehold.co/140x100?text=Sides",
      isRecommendedForMealSuggestion: true
    },
    dishType: "SNACK",
    forChefit: true,
    forParty: true,
    id: 302,
    name: "Chicken Nuggets",
    ingredients: [
      { name: "Chicken", quantity: "200g" },
      { name: "Breadcrumbs", quantity: "50g" }
    ]
  }
];

// ✅ Default export for React
export default dishes;
