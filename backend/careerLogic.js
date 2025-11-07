const careersData = require("./careersData");

function getCareerRecommendation(userSelections) {
  let bestCareer = null;
  let highestScore = 0;

  for (const career of careersData) {
    let score = 0;

    // Match Interests
    if (userSelections.interests && career.rules.interests) {
      score += userSelections.interests.filter(i =>
        career.rules.interests.includes(i)
      ).length * 3;
    }

    // Match Subjects
    if (userSelections.subjects && career.rules.subjects) {
      score += userSelections.subjects.filter(s =>
        career.rules.subjects.includes(s)
      ).length * 2;
    }

    // Match Personality
    if (userSelections.personality && career.rules.personality) {
      score += userSelections.personality.filter(p =>
        career.rules.personality.includes(p)
      ).length * 2;
    }

    // Match Lifestyle
    if (userSelections.lifestyle && career.rules.lifestyle) {
      score += userSelections.lifestyle.filter(l =>
        career.rules.lifestyle.includes(l)
      ).length * 1.5;
    }

    // Match Hobbies
    if (userSelections.hobbies && career.rules.hobbies) {
      score += userSelections.hobbies.filter(h =>
        career.rules.hobbies.includes(h)
      ).length * 1;
    }

    // Update the highest-scoring career
    if (score > highestScore) {
      highestScore = score;
      bestCareer = career;
    }
  }

  // Default fallback (if no strong match)
  return bestCareer || careersData[0];
}

module.exports = { getCareerRecommendation };
