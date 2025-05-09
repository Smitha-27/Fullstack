const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolioDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Define a Mongoose Schema & Model
const projectSchema = new mongoose.Schema({
  name: String,
  status: String
});

const Project = mongoose.model('Project', projectSchema);

// ✅ API Routes

// Get all projects
app.get('/api/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Add a new project
app.post('/api/projects', async (req, res) => {
  const { name, status } = req.body;
  if (!name || !status) {
    return res.status(400).json({ error: 'Name and status are required' });
  }

  const newProject = new Project({ name, status });
  await newProject.save();
  res.status(201).json(newProject);
});

// Root route
app.get('/', (req, res) => {
  res.send('Server + MongoDB is working!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});