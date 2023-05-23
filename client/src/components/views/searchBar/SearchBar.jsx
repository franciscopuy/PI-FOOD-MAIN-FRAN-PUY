import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeByName, resetAllRecipes } from "../../../redux/actions";
import { Filter, Order } from "../..";
import style from "./SearchBar.module.css";


const SearchBar = ({ setPage }) => {
  const [nombre, setNombre] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setNombre(event.target.value);
  };
  const onSearch = (name) => {
    try {
      dispatch(getRecipeByName(name));
      setPage(1);
    } catch (err) {
      window.alert("There are no recipes with that name");
    }
    return setNombre("");
  };
  const allRecipes = () => {
    dispatch(resetAllRecipes());
    setPage(1);
  };

  return (
    <div>
      <div className={style.container}>
        <input
          className={style.input}
          type="search"
          value={nombre}
          onChange={handleChange}
        />
        <button onClick={() => onSearch(nombre)} className={style.button}>
          Search
        </button>

        <button onClick={() => allRecipes()} className={style.button}>
          All Recipes
        </button>

        <span></span>
      </div>
      <div className={style.filters}>
        <Filter />
        <Order />
      </div>
    </div>
  );
};

export default SearchBar;