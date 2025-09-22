
import { useState } from "react";

function ProfilePage() {
  const [role, setRole] = useState("");

  const handleRoleChange = (e) => setRole(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile saved:", { role });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px", textAlign: "center" }}>
      <h2>Make Profile</h2>
      <p>Are you a Student or a Working Professional?</p>

      <label>
        <input
          type="radio"
          name="role"
          value="student"
          checked={role === "student"}
          onChange={handleRoleChange}
        />{" "}
        Student
      </label>

      <label style={{ marginLeft: "10px" }}>
        <input
          type="radio"
          name="role"
          value="professional"
          checked={role === "professional"}
          onChange={handleRoleChange}
        />{" "}
        Working Professional
      </label>

      {role === "student" && (
        <div style={{ marginTop: "10px" }}>
  
          <input type="text" placeholder="Course / Degree" /><br />
          <input type="number" placeholder="Year of Study" /><br />
        </div>
      )}

      {role === "professional" && (
        <div style={{ marginTop: "10px" }}>
          <input type="text" placeholder="Job Title" /><br />
          <input type="number" placeholder="Years of Experience" /><br />
        </div>
      )}

      {role && <button type="submit" style={{ marginTop: "10px" }}>Save Profile</button>}
    </form>
  );
}

export default ProfilePage;
