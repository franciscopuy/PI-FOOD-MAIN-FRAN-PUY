import {
    GET_ALL_DIETS,
    GET_ALL_RECIPES,
    RECET_ALLRECIPES,
    GET_RECIPES_NAME,
    FILTER,
    ORDER,
  } from "./action-types";
  
  const initialState = {
    allRecipes: [],
    recipes: [],
    allDiets: [],
    recipeId: {},
    order: false, // cambia cada vez que se reordena y avisa a home para re-renderizar
  };
  
  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_ALL_DIETS:
        console.log(GET_ALL_DIETS, payload);
        return {
          ...state,
          allDiets: payload,
        };
  
      case GET_ALL_RECIPES:
        console.log(GET_ALL_RECIPES, payload);
        return {
          ...state,
          allRecipes: payload,
          recipes: payload,
        };
  
      case RECET_ALLRECIPES:
        console.log(RECET_ALLRECIPES, payload);
        return {
          ...state,
          allRecipes: state.recipes,
        };
  
      case GET_RECIPES_NAME:
        return {
          ...state,
          allRecipes: payload,
        };
  
      case FILTER:
        let recipesFilter = state.recipes;
        if (payload.byDiet.length) {
          // Por tipo de dieta
          recipesFilter = recipesFilter.filter((recipe) =>
            recipe.diets.includes(payload.byDiet)
          );
        }
        if (payload.byCreated.length) {
          // Por creacion
          recipesFilter = recipesFilter.filter((recipe) =>
            payload.byCreated === "DB" ? isNaN(recipe.id) : !isNaN(recipe.id)
          );
        }
        return {
          ...state,
          allRecipes: recipesFilter,
        };
  
      case ORDER:
        let recipesOrder = state.allRecipes;
        console.log(payload);
        if (payload.byHealthScore.length) {
          recipesOrder.sort((a, b) => a.healthScore - b.healthScore);
          if (payload.byHealthScore === "MaxToMin") recipesOrder.reverse();
        }
        if (payload.byTitle.length) {
          recipesOrder.sort((a, b) => a.title.localeCompare(b.title));
          if (payload.byTitle === "Descending") recipesOrder.reverse();
        }
        return {
          ...state,
          order: !state.order,
          allRecipes: recipesOrder,
        };
  
      default:
        return { ...state };
    }
  };
  
  export default reducer;