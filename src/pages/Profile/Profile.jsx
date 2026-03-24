
import "./Profile.css";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile-container">

      {/* 🔥 Top Header */}
      <div className="header">
        <h3>Account Settings</h3>
      </div>

      {/* 🔥 Card */}
      <div className="profile-card">

        <div className="user-info">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />

          <div className="user-text">
            <h4>{user?.name || "Marry Doe"}</h4>
            <p>{user?.email || "marry@example.com"}</p>
          </div>
        </div>

        <p className="desc">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
        </p>

      </div>
    </div>
  );
};

export default Profile;

