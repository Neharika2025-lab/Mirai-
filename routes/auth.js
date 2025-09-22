import express from "express"; //to define routes/ flow --like ->signup or ->login
import jwt from "jsonwebtoken"; // creates a new login tokens---to store roles and avoid recursive sign ups 
import bcrypt from "bcryptjs"; //hashing and comparing passwords
import db from "../db.js"; //connects the sqllite database

const router = express.Router();

router.post("/signup", async (req, res) => {        //creates an asynchronous signup end point
  const { name, email, password } = req.body;   //extracts data from request body

  if (!name || !email || !password) {    //if any of the fields is empty then prompt user to enter data
    return res.status(400).json({ error: "All fields required" });
  }

  const passwordHash = await bcrypt.hash(password, 10); //hashes the password using 10 salt rounds---increases security by avoiding saving of plain text

  db.run(
    "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)", //insert values into database
    [name, email, passwordHash],
    function (err) { //callback runs after query finished
    if (err) {
      console.error(err.message);  // log real SQLite error
      return res.status(400).json({ error: "email exists" });
    }
      res.json({ success: true, userId: this.lastID }); //this.lastID--gives new user id
    }
  );
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => { //gets data from the database
    if (err || !user) return res.status(401).json({ error: "Invalid credentials" }); //if userid doesn't match

    const valid = await bcrypt.compare(password, user.password_hash); //compares the password and hashed password saved in the database
    if (!valid) return res.status(401).json({ error: "Invalid credentials" }); //if password doesn't match

    const token = jwt.sign( //creates login tokens 
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ success: true, token, user: { id: user.id, name: user.name, email: user.email } }); //sends back the token with user info,i.e,without password
  });
});

export default router; //exports router to server.js
