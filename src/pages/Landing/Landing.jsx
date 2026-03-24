import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  // handle button clicks
  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
<div className="landing-container">      <div className="content">
        <h2>  Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet <br />consectetur adipiscing elit.</p>

        <button className="primary-btn" onClick={handleRegister}>
          Create Account
        </button>

        <button className="secondary-btn" onClick={handleLogin}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Landing;