// src/pages/SignUp.jsx
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend later
    alert("Signed up (frontend demo)");
  };

  const handleGuest = (e) => {
    e.preventDefault();
    // here we just send them to the main page as a guest
    navigate("/");
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h2>Create Your Account</h2>
        <p className="auth-subtitle">
          Start your AI-powered fitness journey in seconds.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input type="text" placeholder="Alex Fit" required />
          </label>

          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="Create a strong password"
              required
            />
          </label>

          <button type="submit" className="btn primary full">
            Sign Up
          </button>
        </form>

        <div className="auth-divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <button className="btn guest-btn" onClick={handleGuest}>
          Continue as guest
        </button>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/signin">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUp;
