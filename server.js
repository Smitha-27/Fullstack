const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory project storage
let projects = [];

// GET route
app.get('/api/projects', (req, res) => {
  res.json(projects);
  //res.send("hello world");
});

// POST route
app.post('/api/projects', (req, res) => {
  const { name, status } = req.body;
  if (!name || !status) {
    return res.status(400).json({ error: 'Name and status are required' });
  }
  const newProject = { id: Date.now(), name, status };
  projects.push(newProject);
  res.status(201).json(newProject);
});

// Root route
app.get('/', (req, res) => {
  res.send('Server is working');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/portfolioDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

const Contact = require('./models/Contact'); // Make sure the path is correct

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (err) {
    console.error('❌ Error saving contact:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});