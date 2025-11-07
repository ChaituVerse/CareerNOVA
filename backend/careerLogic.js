// ====================== careerLogic.js — FINAL ======================

const careersData = require("./careersData");

// Calculate match score based on overlapping tags
function getCareerRecommendation(userSelections) {
  console.log("🧠 User Selections Received:", userSelections);

  const { interests = [], subjects = [], personality = [], lifestyle = [] } = userSelections;

  let bestMatch = null;
  let highestScore = 0;

  careersData.forEach((career) => {
    let score = 0;

    // Count overlaps in all fields
    score += career.rules.interests.filter((i) => interests.includes(i)).length * 3;
    score += career.rules.subjects.filter((s) => subjects.includes(s)).length * 2;
    score += career.rules.personality.filter((p) => personality.includes(p)).length * 2;
    score += career.rules.lifestyle.filter((l) => lifestyle.includes(l)).length;

    if (score > highestScore) {
      highestScore = score;
      bestMatch = career;
    }
  });

  console.log("🏆 Best Match:", bestMatch ? bestMatch.careerTitle : "None found");

  if (!bestMatch) {
    return {
      careerTitle: "Exploration Needed",
      tagline: "We couldn't find a perfect match — try selecting more fields!",
    };
  }

  return {
    careerPath: {
      title: bestMatch.careerTitle,
      tagline: bestMatch.tagline,
      skills: bestMatch.skills,
      roadmapImg: bestMatch.roadmapImg,
      reason: bestMatch.whyFit,
      courses: bestMatch.courses,
      nextSteps: bestMatch.nextSteps,
    },
  };
}

module.exports = { getCareerRecommendation };
