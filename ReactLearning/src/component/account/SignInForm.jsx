import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignInForm.css";

const SignInForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "https://apibackend.runasp.net/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Store tokens in localStorage
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("tokenExpiry", data.expiresAt);
        localStorage.setItem("isLoggedIn", "true");

        navigate("/"); // Redirect to home page
      } else {
        const errorData = await response.json();
        setError("Invalid email or password");
        console.error("Login failed:", errorData);
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error("Error during login:", error);
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="form-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="signin-form">
          <div className="input-container">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-wrapper">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span className="custom-checkbox"></span>
                Remember me
              </label>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        <div className="form-footer">
          <p>
            Don't have an account?{" "}
            <a href="#" onClick={goToRegister}>
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
