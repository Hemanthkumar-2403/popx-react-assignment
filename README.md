
```md
# 🚀 PopX React Assignment

This project is a **frontend UI application** built using React that replicates the PopX user flow as per the provided design.

It includes a complete authentication flow with multiple screens, form validation, and global state management.

---

## 📌 Features

- 🏠 Landing Page  
  - Welcome screen with CTA buttons  
  - Navigation to Register and Login  

- 🔐 Login Page  
  - Email & Password input  
  - Button enabled only when valid  
  - Loads user data into Redux  

- 📝 Register Page  
  - Full user form  
  - Live validation (Name, Phone, Email, Password)  
  - Error messages displayed instantly  
  - Disabled button until all fields are valid  
  - Stores user data in Redux + localStorage  

- 👤 Profile Page  
  - Displays user data using Redux Toolkit  
  - Data persists using localStorage  
  - Clean UI matching design  
  - Full-height layout with header  

---

## 🔄 State Management

Redux Toolkit is used to manage user data across the application.

- User data is stored in Redux after registration/login  
- Redux state is accessed in the Profile page  
- localStorage is used for persistence (to retain data after refresh)  

---

## 🧠 Key Concepts Used

- React Functional Components  
- React Router (Navigation)  
- useState Hook (Local State Management)  
- Redux Toolkit (Global State Management)  
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
- Redux Toolkit + React Redux  

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
├── redux/
│    ├── store.js
│    └── userSlice.js
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

## 👨‍💻 Author

**K Hemanth Kumar**

* GitHub: https://github.com/Hemanthkumar-2403
* LinkedIn: https://www.linkedin.com/in/hemanth-kandappagari/

---

## ⭐ Conclusion

This project demonstrates strong understanding of:

* UI development
* Form validation
* Component-based architecture
* State management using Redux Toolkit
* Clean and scalable frontend design

```
```
