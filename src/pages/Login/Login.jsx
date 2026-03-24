import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
const dispatch = useDispatch();

  // form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // check if form is valid
  const isValid = formData.email && formData.password;

  // handle login
  const handleLogin = (e) => {
  e.preventDefault();

  if (!isValid) {
    alert("Please fill all fields");
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser || storedUser.email !== formData.email) {
    alert("Invalid user");
    return;
  }

  // ✅ redux store
  dispatch(setUser(storedUser));

  navigate("/profile");
};

  return (
<div className="login-container">
        <form className="form" onSubmit={handleLogin}>
        <h2>Signin to your PopX account</h2>
        <p>Lorem ipsum dolor sit amet <br />consectetur adipiscing elit.</p>
<div className="input-group">
  <label>Email Address</label>
  <input
    type="email"
    name="email"
    placeholder="Enter email address"
    onChange={handleChange}
  />
</div>

<div className="input-group">
  <label>Password</label>
  <input
    type="password"
    name="password"
    placeholder="Enter password"
    onChange={handleChange}
  />
</div>

        <button
          type="submit"
          className={isValid ? "active-btn" : "disabled-btn"}
          disabled={!isValid}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;