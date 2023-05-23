import style from "./Paginado.module.css";

const Paginado = ({ page, setPage, max }) => {
  // Crear un array de números entre 1 y 'max
  const pages = Array.from({ length: max }, (_, i) => i + 1);
  return (
    <div className={style.contenedor}>
      <button
        className={style.button}
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >{"<"}</button>

      {pages.map((pageMap) => (
        <button
          className={`${style.button} ${page === pageMap ? style.active : ""}`}
          key={pageMap}
          onClick={() => setPage(pageMap)}
        >{pageMap}</button>
      ))}

      <button
        className={style.button}
        disabled={page === max}
        onClick={() => setPage(page + 1)}
      >{">"}</button>
    </div>
  );
};

export default Paginado;