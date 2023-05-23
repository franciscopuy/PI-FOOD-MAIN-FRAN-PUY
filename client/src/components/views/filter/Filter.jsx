import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { filter } from "../../../redux/actions";
import style from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();

  // Opciones de filtrado
  const [filterSelect, setFilterSelect] = useState({
    byDiet: "",
    byCreated: "",
  });

  const handleFilter = (event) => {
    setFilterSelect({
      // Cambia estado de opciones de filtrado
      ...filterSelect,
      [event.target.name]: event.target.value,
    });
    // Manda a filtrar
    dispatch(
      filter({
        ...filterSelect,
        [event.target.name]: event.target.value,
      })
    );
  };

  const diets = useSelector((state) => state.allDiets).sort(
    (a, b) => a.name.localeCompare(b.name) // Ordenamiento alfavetico de las dietas
  );

  return (
    <div>
      <select
        className={style.list}
        value={filterSelect.byDiet}
        name="byDiet"
        onChange={handleFilter}
      >
        <option value="">Filter by Diet</option>
        {diets?.map((diet) => (
          <option value={diet.name} key={diet.id}>
            {diet.name}
          </option>
        ))}
      </select>

      <select
        className={style.list}
        value={filterSelect.byCreated}
        name="byCreated"
        onChange={handleFilter}
      >
        <option value="">All created</option>
        <option value="DB">Created by User</option>
        <option value="API">Created by App</option>
      </select>
    </div>
  );
};

export default Filter;