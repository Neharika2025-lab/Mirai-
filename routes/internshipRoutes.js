import express from "express";
import { getAllInternships } from "../controllers/internshipController.js";

const router = express.Router();

router.get("/", getAllInternships); // GET all internships

export default router;
