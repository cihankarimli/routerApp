import React from "react";
import { Link } from "react-router-dom";
import Filter from "../Filter";

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li className="home-nav">
            <Link to="/">Home</Link>
          </li>
          <li>Contact</li>
          <li>About</li>
          <li>Profile</li>
          <Filter />
        </ul>
      </nav>
    </div>
  );
}

export default Header;
