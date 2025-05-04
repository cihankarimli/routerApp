import React from "react";
import { Link } from "react-router-dom";
import Filter from "../Filter";
import { useSelector } from "react-redux";

function Header() {
  const { count } = useSelector((state) => state.counter);
  console.log(count);

  return (
    <div>
      <nav>
        <ul>
          <div className="nav-link">
            <li className="home-nav">
              <Link to="/">Home</Link>
            </li>
            <li>Contact</li>
            <li>About</li>
            <li>Profile</li>
            <li>
              <Link to="/favoritePage">
                FavoriteCar
                <span>{count}</span>
              </Link>
            </li>
            <li>
              <Filter />
            </li>
          </div>
          <div className="form-button">
            <li className="form">
              <Link to="/form">
                <button className="form-link-button">Create Add</button>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
