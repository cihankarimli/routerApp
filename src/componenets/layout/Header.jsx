import React from "react";
import { Link } from "react-router-dom";
import Filter from "../Filter";

function Header() {
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
