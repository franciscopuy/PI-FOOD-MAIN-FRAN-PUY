import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ image, id, name, diets }) => {
  return (
    <div className={style.card}>
      <img className={style.image} src={image} alt={name} />
      <Link to={`/detail/${id}`}>
        <h2 className={style.recipeTitle}>{name}</h2>
      </Link>
      <h3 className={style.diets}>Diets: {diets}</h3>
    </div>
  );
};

export default Card;