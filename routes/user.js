import express from "express";
import jwt from "jsonwebtoken";
import db from "../db.js";

const router = express.Router();

// Middleware (remains unchanged)
function authenticateToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token required" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user;
    next();
  });
}


// Create/Update Profile 
router.post("/profile", authenticateToken, (req, res) => {
  // Destructure all possible fields from the request body
  const {
    profile_type, // 'student' or 'professional'
    degree,
    year_of_study,
    job_title,
    years_of_experience,
  } = req.body;
  
  const userId = req.user.userId;

  // The SQL query now includes all the new columns.
  // The 'ON CONFLICT' clause handles both creating a new profile and updating an existing one.
  const sql = `
    INSERT INTO profiles (
      user_id, profile_type, degree, year_of_study, 
      job_title, years_of_experience
    )
    VALUES (?, ?, ?, ?, ?, ?)
    ON CONFLICT(user_id) DO UPDATE SET 
      profile_type = excluded.profile_type,
      degree = excluded.degree,
      year_of_study = excluded.year_of_study,
      job_title = excluded.job_title,
      years_of_experience = excluded.years_of_experience,
      updated_at = CURRENT_TIMESTAMP
  `;

  // The parameters array matches the order of the '?' in the SQL query.
  // If a field is not provided (e.g., company_name for a student), it will be 'undefined' and stored as NULL.
  const params = [
    userId,
    profile_type,
    degree,
    year_of_study,
    job_title,
    years_of_experience,
  ];

  db.run(sql, params, function (err) {
    if (err) {
      console.error("DB error:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({
      success: true,
      message: "Profile saved successfully",
    });
  });
});

// Get Profile (UPDATED to return all fields)
router.get("/profile", authenticateToken, (req, res) => {
  const userId = req.user.userId;

  // "SELECT *" will now correctly fetch all the new columns we added.
  db.get("SELECT * FROM profiles WHERE user_id = ?", [userId], (err, profile) => {
    if (err) {
      console.error("DB error:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    // The response will include all details, allowing your frontend to
    // display the correct form (Student/Professional) and fill in the data.
    res.json({
      success: true,
      profile: {
        ...profile,
      },
    });
  });
});

export default router;