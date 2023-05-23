import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { order } from "../../../redux/actions";
import style from "./Order.module.css";

const Order = () => {
  const dispatch = useDispatch();

  // Opciones de orden
  const [orderSelect, setOrderSelect] = useState({
    byHealthScore: "",
    byTitle: "",
  });

  const handleOrder = (event) => {
    setOrderSelect({
      // Cambia estado de opciones de orden
      byHealthScore: "",
      byTitle: "",
      [event.target.name]: event.target.value,
    });
  };

  const allDiets = useSelector((state) => state.allDiets);
  useEffect(() => {
    // Si cambio el filtrado lo ordena
    dispatch(order({ ...orderSelect })); // Manda a ordenar
  }, [allDiets, dispatch, orderSelect]);

  return (
    <div>
      <select
        className={style.list}
        value={
          orderSelect.byHealthScore.length
            ? orderSelect.byHealthScore
            : "Order by HealthScore"
        }
        name="byHealthScore"
        onChange={handleOrder}
      >
        <option value="">Order by HealthScore</option>
        <option value="MinToMax">smallest to largest</option>
        <option value="MaxToMin">largest to smallest</option>
      </select>

      <select
        className={style.list}
        value={
          orderSelect.byTitle.length
            ? orderSelect.byHealthScore
            : "Order by Title"
        }
        name="byTitle"
        onChange={handleOrder}
      >
        <option value="">Order by Title</option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
    </div>
  );
};

export default Order;