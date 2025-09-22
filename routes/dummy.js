// utils/recommendation.js
export function recommendSkills(profile, allSkills) {
  // Later: AI logic goes here
  return allSkills.filter(skill => skill.difficulty === "beginner");
}
