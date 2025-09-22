
import { useState } from "react";
import Header from "./Header.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import ProfilePage from "./profile.jsx";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {/* Hide header on login/signup/profile */}
      {page !== "login" && page !== "signup" && page !== "profile" && (
        <Header page={page} setPage={setPage} />
      )}

      {/* Home Page */}
      {page === "home" && (
        <div style={{ textAlign: "center", marginTop: "100px", }}>
          <button onClick={() => setPage("login")}>Log In</button>
        </div>
      )}

      {/* About Page */}
      {page === "about" && (
        <div style={{ textAlign: "center", marginTop: "100px", }}>
          <h2>About SkillBridge</h2>
          <p>
            SkillBridge is a platform to track your skills, jobs applied, and time spent on learning.
            You can manage your profile and access all features from your dashboard.
          </p>
          <h3>Team Mirai</h3>
          <p>Ustat Kaur</p>
          <p>Palecanda Neharika Chinnappa</p>
          <p>Dhathri P.G.</p>
          <p>K.N. Ramita</p>
        </div>

        
      )}

      {/* Login Page */}
      {page === "login" && <Login setPage={setPage} />}

      {/* Sign Up Page */}
      {page === "signup" && <Signup setPage={setPage} />}

      {/* Profile Page */}
      {page === "profile" && <ProfilePage />}
    </div>
  );
}

export default App;
