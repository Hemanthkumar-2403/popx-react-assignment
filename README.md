```md
# 🚀 PopX React Assignment

This project is a **frontend UI application** built using React that replicates the PopX user flow as per the provided design.

It includes a complete authentication flow with multiple screens and form validation.

---

## 📌 Features

- 🏠 Landing Page
  - Welcome screen with CTA buttons
  - Navigation to Register and Login

- 🔐 Login Page
  - Email & Password input
  - Button enabled only when valid

- 📝 Register Page
  - Full user form
  - Live validation (Name, Phone, Email, Password)
  - Error messages displayed instantly
  - Disabled button until all fields are valid

- 👤 Profile Page
  - Displays user data from localStorage
  - Clean UI matching design
  - Full-height layout with header

---

## 🧠 Key Concepts Used

- React Functional Components
- React Router (Navigation)
- useState Hook (State Management)
- Form Handling
- Live Input Validation
- Conditional Rendering
- LocalStorage (Data persistence)
- Flexbox Layout (CSS)

---

## 🎯 Validation Rules

- Name → Required
- Phone → Must be 10 digits
- Email → Valid email format
- Password → Minimum 6 characters

---

## 💻 Tech Stack

- React (Vite)
- JavaScript (ES6+)
- CSS (Flexbox)

---

## 📂 Project Structure

```

src/
├── pages/
│    ├── Landing/
│    ├── Login/
│    ├── Register/
│    ├── Profile/
│
├── routes/
│    └── AppRoutes.jsx
│
├── styles/
│    └── global.css
│
├── App.jsx
└── main.jsx

````

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone <your-repo-link>

# Go to project folder
cd popx-app

# Install dependencies
npm install

# Run project
npm run dev
````

---

## 📸 Screens Included

* Landing Screen
* Login Screen
* Register Screen
* Profile Screen

---

## 🚀 Future Improvements

* API integration (backend authentication)
* Form validation with libraries (Formik / Yup)
* Toast notifications
* Profile edit functionality
* Image upload feature

---


---

## ⭐ Conclusion

This project demonstrates strong understanding of:

* UI development
* Form validation
* Component-based architecture
* Clean and scalable frontend design

```
```
