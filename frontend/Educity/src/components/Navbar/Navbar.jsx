import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import "./Navbar.css";
import { assets } from "../../assets/asset.js";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          <img src={assets.logo} alt="" />
          Educity
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/courses" className="navbar-link">
          Courses
        </Link>
        <Link to="/community" className="navbar-link">
          Community
        </Link>
        <Link to="/feedback" className="navbar-link">
          Feedback
        </Link>
      </div>
      <div className="navbar-auth">
        {user ? (
          <>
            <span className="navbar-user">Welcome, {user.username}</span>
            <button onClick={handleLogout} className="navbar-button">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-button">
              Login
            </Link>
            <Link to="/register" className="navbar-button">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
