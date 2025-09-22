import express from "express";
import { getAllSkills, getSkillById } from "../controllers/skillController.js";

const router = express.Router();

router.get("/", getAllSkills);          // GET all skills
router.get("/:id", getSkillById);       // GET skill by ID

export default router;
