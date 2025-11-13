// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          <span className="logo-icon">🏋️‍♀️</span>
          <span className="logo-text">
            <span className="logo-burn">Burn</span>
            <span className="logo-out">Out</span>
          </span>
        </Link>

        <nav className="nav-pill-menu">
          <button className="pill">AI Coach</button>
          <button className="pill">Sport Scheduler</button>
          <button className="pill">Diet Plan</button>
          <button className="pill">Workout</button>
          <button className="pill">Personalized Routine</button>
        </nav>
      </div>

      <div className="nav-right">
        <NavLink
          to="/signin"
          className={({ isActive }) =>
            "nav-link" + (isActive ? " nav-link-active" : "")
          }
        >
          Sign in
        </NavLink>

        <NavLink
          to="/signup"
          className={({ isActive }) =>
            "btn green small" + (isActive ? " btn-active" : "")
          }
        >
          Sign up
        </NavLink>

        <button
          type="button"
          className={`theme-toggle theme-toggle-${theme}`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
