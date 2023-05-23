import axios from "axios";

import {
  GET_ALL_DIETS,
  GET_ALL_RECIPES,
  RECET_ALLRECIPES,
  GET_RECIPES_NAME,
  FILTER,
  ORDER,
} from "./action-types";

// Trae y guarda las dietas en allDiets
export const getAllDiets = () => {
  return async (dispatch) => {
    try {
      const dietas = await axios.get("/diets");
      const allDiets = dietas.data;
      dispatch({ type: GET_ALL_DIETS, payload: allDiets });
    } catch (error) {
      console.error(error);
    }
  };
};

// Trae y guarda las recetas en allRecipes y recipes
export const getAllRecipes = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/recipe");
      const allRecipes = response.data;
      dispatch({ type: GET_ALL_RECIPES, payload: allRecipes });
    } catch (error) {
      console.error(error);
    }
  };
};

// Recarga allRecipes con info de recipes para resetear todo y evitar consultar al back
export const resetAllRecipes = () => {
  return async (dispatch) => {
    dispatch({ type: RECET_ALLRECIPES });
  };
};

// Trae y guarda recetas por name en allRecipes
export const getRecipeByName = (name) => {
  return async (dispatch) => {
    try {
      const receta = await axios.get(`/recipe?name=${name}`);
      const recetaNombre = receta.data;
      dispatch({ type: GET_RECIPES_NAME, payload: recetaNombre });
    } catch (error) {
      console.error(error);
      alert(`There is no recipe named ${name}`);
    }
  };
};

// Filtrado
export const filter = (options) => {
  return (dispatch) => {
    dispatch({ type: FILTER, payload: options });
  };
};

// Ordenado
export const order = (options) => {
  return (dispatch) => {
    dispatch({ type: ORDER, payload: options });
  };
};