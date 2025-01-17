const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Use CORS to allow requests from your React app
app.use(cors());

// Sample problems data
const problems = [
  { id: 1, title: 'No clean water supply in XYZ village', description: 'The village of XYZ has no access to clean drinking water. They rely on a nearby contaminated river.', latitude: '7.8731', longitude: '80.7718' },
  { id: 2, title: 'Water scarcity during drought seasons in ABC town', description: 'ABC town experiences severe water scarcity during droughts due to lack of proper storage systems.', latitude: '6.9271', longitude: '79.8612' },
  { id: 3, title: 'Contaminated groundwater in DEF city', description: 'DEF city’s groundwater has high levels of pollutants, making it unsafe for consumption.', latitude: '6.9341', longitude: '80.2273' },
  { id: 4, title: 'Flooding in GHI district', description: 'During heavy rains, GHI district faces severe flooding due to poor drainage systems.', latitude: '7.1055', longitude: '80.5642' },
  { id: 5, title: 'Water waste in JKL region', description: 'The JKL region has a high rate of water wastage due to inefficient irrigation systems.', latitude: '7.1234', longitude: '81.0456' },
  { id: 6, title: 'Lack of proper sanitation in MNO village', description: 'MNO village lacks proper sanitation systems, leading to water contamination.', latitude: '7.7890', longitude: '79.6543' },
  { id: 7, title: 'Drought affecting PQR town', description: 'PQR town has been experiencing prolonged droughts, causing a severe shortage of water supply.', latitude: '6.4923', longitude: '79.9876' },
  { id: 8, title: 'Deforestation causing water issues in STU region', description: 'The increasing deforestation in STU region has disrupted the water cycle, leading to reduced rainfall.', latitude: '6.6784', longitude: '80.4456' },
  { id: 9, title: 'Pollution of river in VWX valley', description: 'The river in VWX valley has been polluted by industrial waste, making water unsafe for use.', latitude: '7.2341', longitude: '80.3321' },
  { id: 10, title: 'Water leakage in YZ city', description: 'YZ city faces significant water leakage issues, wasting large quantities of water daily.', latitude: '7.0123', longitude: '81.1234' },
  { id: 11, title: 'Water waste in JKL region', description: 'The JKL region has a high rate of water wastage due to inefficient irrigation systems.', latitude: '7.1234', longitude: '81.0456' },
  { id: 12, title: 'Lack of proper sanitation in MNO village', description: 'MNO village lacks proper sanitation systems, leading to water contamination.', latitude: '7.7890', longitude: '79.6543' }
];

// Endpoint to get all problems
app.get('/problems', (req, res) => {
  res.json(problems);
});

// Endpoint to get a specific problem by ID
app.get('/problems/:id', (req, res) => {
  const problemId = parseInt(req.params.id, 10);
  const problem = problems.find(p => p.id === problemId);
  if (problem) {
    res.json(problem);
  } else {
    res.status(404).json({ message: 'Problem not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
