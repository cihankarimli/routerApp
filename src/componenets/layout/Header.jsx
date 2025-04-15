import React from "react";
import { Link } from "react-router-dom";

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
        </ul>
      </nav>
    </div>
  );
}

export default Header;
