import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to={"/"}>
          <img
            className="header__icon"
            src="https://ik.imagekit.io/xcuqahb2st38/rand/logo.png?updatedAt=1706619838623"
            alt=""
          />
        </Link>
        <Link to={"/movies/popular"}>
          <span>Popular</span>
        </Link>
        <Link to={"/movies/top_rated"}>
          <span>Top Rated</span>
        </Link>
        <Link to={"/movies/upcoming"}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
