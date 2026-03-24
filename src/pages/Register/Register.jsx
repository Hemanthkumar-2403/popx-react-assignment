
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
const dispatch = useDispatch();
const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const [errors, setErrors] = useState({});

  // 🔥 validate single field (LIVE)
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Full name is required";

      case "phone":
        return /^[0-9]{10}$/.test(value)
          ? ""
          : "Enter valid 10-digit phone number";

      case "email":
        return /^\S+@\S+\.\S+$/.test(value)
          ? ""
          : "Enter valid email address";

      case "password":
        return value.length >= 6
          ? ""
          : "Minimum 6 characters required";

      default:
        return "";
    }
  };

  // 🔥 handle change with live validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    // phone → allow only numbers
    if (name === "phone") {
      updatedValue = value.replace(/\D/g, "");
    }

    // email → lowercase
    if (name === "email") {
      updatedValue = value.toLowerCase();
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    // validate field instantly
    const errorMsg = validateField(name, updatedValue);

    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  // 🔥 submit validation (final check)
  const handleSubmit = (e) => {
  e.preventDefault();

  let newErrors = {};

  Object.keys(formData).forEach((key) => {
    const error = validateField(key, formData[key]);
    if (error) newErrors[key] = error;
  });

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  // ✅ save in localStorage
  localStorage.setItem("user", JSON.stringify(formData));

  // ✅ save in redux
  dispatch(setUser(formData));

  navigate("/profile");
};

  // 🔥 form validity
  const isValid =
    Object.values(errors).every((err) => err === "") &&
    formData.name &&
    formData.phone.length === 10 &&
    formData.email &&
    formData.password.length >= 6;

  return (
    <div className="register-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Create your PopX account</h2>

        {/* Name */}
        <div className="input-group">
          <label>
            Full Name <span className="required">*</span>
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error-input" : ""}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        {/* Phone */}
        <div className="input-group">
          <label>
            Phone number <span className="required">*</span>
          </label>
          <input
            type="tel"
            maxLength="10"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "error-input" : ""}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        {/* Email */}
        <div className="input-group">
          <label>
            Email address <span className="required">*</span>
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* Password */}
        <div className="input-group">
          <label>
            Password <span className="required">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "error-input" : ""}
          />
          {errors.password && (
            <span className="error">{errors.password}</span>
          )}
        </div>

        {/* Company */}
        <div className="input-group">
          <label>Company name</label>
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        {/* Agency */}
        <p className="label">Are you an Agency?</p>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={formData.agency === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="agency"
              value="no"
              checked={formData.agency === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <button
          type="submit"
          className={isValid ? "active-btn" : "disabled-btn"}
          disabled={!isValid}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;

