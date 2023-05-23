import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <button>LANDING</button>
      </Link>
      <Link to="/home">
        <button>HOME</button>
      </Link>
      <Link to="/form">
        <button>CREATE RECIPE</button>
      </Link>
    </div>
  );
};

export default NavBar;