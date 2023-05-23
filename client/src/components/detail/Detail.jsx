import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [recipeId, setRecipeId] = useState([]);

  useEffect(() => {
    axios
      .get(`/recipes/${id}`)
      .then((response) => response.data)
      .then((data) => setRecipeId(data))
      .catch((error) => alert(error.message));
      //`There is no recipe with that ID ${id}`

    return setRecipeId({}); //Al desmontar el componente
  }, [id]);

  const dietsUpperCase = recipeId?.diets?.map((recipe) => {
    return recipe.charAt(0).toUpperCase() + recipe.slice(1);
  });
  const renderedSteps = recipeId?.steps?.map((step, index) => (
    <React.Fragment key={index}>
      {' -> ' + step}
      <br />
    </React.Fragment>
  ));

  return (
    <div className={style.organicer}>
      <div className={style.container}>
        <div className={style.closeButtonContainer}>
          <Link to="/home">
            <button className={style.closeButton}>CLOSE</button>
          </Link>
        </div>
        <h1 className={style.title}>ID: {recipeId?.id}</h1>
        <img className={style.image} src={recipeId?.image} alt={recipeId?.title} />
        <h2 className={style.recipeName}>{recipeId?.title}</h2>
        <h3 className={style.subTitles}>Summary: </h3>
        <p className={style.paragraph}>{recipeId?.summary}</p>
        <h3 className={style.subTitles}>Steps: </h3>
        {recipeId?.steps && (
          <p className={style.paragraph}>{renderedSteps}</p>
        )}
        <h3 className={style.subTitles}>Diets: </h3>
        {dietsUpperCase && (
          <p className={style.paragraph}>{dietsUpperCase.join(", ")}</p>
        )}
        <div className={style.healthScore}>
          <h3 className={style.subTitles}>HealthScore: </h3>
        </div>
        <div>
          <p className={style.number}>{recipeId?.healthScore}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;