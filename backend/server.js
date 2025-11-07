// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { getCareerRecommendation } = require('./careerLogic');
const path = require('path');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../public')); // optional if you serve statically
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => res.send('CareerNOVA backend active'));

app.post('/api/analyze', (req, res) => {
  try {
    const userSelections = req.body || {};
    const result = getCareerRecommendation(userSelections);
    res.json(result);
  } catch (err) {
    console.error('Analyze error', err);
    res.status(500).json({ careerPath: null, matchScore: 0 });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
