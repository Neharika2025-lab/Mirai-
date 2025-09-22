import mongoose from "mongoose";

//for now we're gonna hardcode it later we'll extract data from other websites --using AI maybe
const internshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: String,
  skillsRequired: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
  description: String,
  location: String,
  isRemote: { type: Boolean, default: false },
  postedAt: { type: Date, default: Date.now },
  expiresAt: Date
});

export default mongoose.model("Internship", internshipSchema);
