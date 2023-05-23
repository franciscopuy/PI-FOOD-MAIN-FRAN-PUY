import { SearchBar, CardsContainer, Paginado } from "../";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDiets, getAllRecipes } from "../../redux/actions";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const order = useSelector((state) => state.order); // Re-renderiza al cambiar el ordenado
  const stateRecipes = useSelector((state) => state.recipes);
  const allRecipes = useSelector((state) => state.allRecipes);
  console.log(allRecipes)
  //Paginado!
  const [page, setPage] = useState(1);
  const perPage = 9;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const max = Math.ceil(allRecipes?.length / perPage);
  const recipes = allRecipes?.slice(startIndex, endIndex); 

  useEffect(() => {
    // Al montar el componente
    if(!stateRecipes.length){
      dispatch(getAllRecipes());
      dispatch(getAllDiets());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={style.container}>
     <div>
      {allRecipes && allRecipes.map((rec) => {
        return (
          <Card
            key={rec.id}
            id={rec.id}
            image={rec.image}
            name={rec.name}
            diets={rec.diets.join(", ")}
          />
        );
      })}
    </div>
      <SearchBar setPage={setPage} />
      <br />
      <h1 className={style.title}>RECIPES</h1>
      <CardsContainer recipesAll={recipes} />
      <footer>
        <Paginado page={page} setPage={setPage} max={max} />
      </footer>
    </div>
  );
};

export default Home;