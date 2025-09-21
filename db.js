import sqlite3 from "sqlite3"; //database we're gonna use for the storing of credentials
import bcrypt from "bcryptjs"; //module to convert passwords into hash to increase protection 

sqlite3.verbose(); //easier to identify where the error is on the database 

const db = new sqlite3.Database(process.env.SQLITE_PATH || "job_portal.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

export default db; //export the database so that other files can use it 
