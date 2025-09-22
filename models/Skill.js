import mongoose from "mongoose";
const skillSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  description: String,
  difficulty: { type: String, enum: ["beginner","intermediate","advanced"], default: "beginner" },
  // for expired skill tracking--this is just for testing --once we get the AI integrated we don't need this
  popularity: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }  
}, { timestamps: true });

skillSchema.methods.incrementPopularity = function() {
  this.popularity += 1;
  return this.save();
};

export default mongoose.model("Skill",skillSchema)