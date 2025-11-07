// careerLogic.js — simple rule-based matcher
const careersData = require('./careersData');

function arrayOverlapCount(a = [], b = []) {
  const setB = new Set(b.map(x => String(x).toLowerCase()));
  return a.reduce((s, v) => s + (setB.has(String(v).toLowerCase()) ? 1 : 0), 0);
}

function getCareerRecommendation(userSelections = {}) {
  // userSelections: { interests:[], subjects:[], personality:[], lifestyle:[], hobbies:[] }
  const categories = ['interests','subjects','personality','lifestyle','hobbies'];
  const results = [];

  careersData.forEach(career => {
    let score = 0;
    let maxPossible = 0;

    // For each category, compute overlap count
    categories.forEach(cat => {
      const careerTags = career.rules && career.rules[cat] ? career.rules[cat] : [];
      const userTags = userSelections[cat] || [];
      const overlap = arrayOverlapCount(careerTags, userTags);
      score += overlap;
      maxPossible += Math.min(careerTags.length, Math.max(1, userTags.length)); // conservative cap
    });

    // Avoid divide by zero
    const percent = maxPossible > 0 ? Math.round((score / maxPossible) * 100) : 0;
    results.push({ career, score, percent });
  });

  // sort by percent desc then score
  results.sort((a,b) => b.percent - a.percent || b.score - a.score);

  // top result
  const top = results[0] || null;

  // return normalized object for frontend: { careerPath: {...}, matchScore: N }
  if (top) {
    const { career, percent } = top;
    const careerResult = {
      id: career.id,
      careerTitle: career.careerTitle,
      tagline: career.tagline,
      skills: career.skills,
      roadmapImg: career.roadmapImg,
      whyFit: career.whyFit,
      courses: career.courses,
      colleges: career.colleges,
      nextSteps: career.nextSteps,
      matchedRules: { percent }
    };
    return { careerPath: careerResult, matchScore: percent };
  } else {
    return { careerPath: null, matchScore: 0 };
  }
}

module.exports = { getCareerRecommendation };
