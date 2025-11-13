import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <h2>Sign In</h2>
        <p className="auth-subtitle">
          Welcome back! Log in to your personalized fitness dashboard.
        </p>

        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Password
            <input type="password" placeholder="••••••••" required />
          </label>

          <button type="submit" className="btn primary full">
            Sign In
          </button>
        </form>

        <p className="auth-footer">
          Don&apos;t have an account?{" "}
          <Link to="/signup">Create one</Link>
        </p>
      </div>
    </main>
  );
};

export default SignIn;
