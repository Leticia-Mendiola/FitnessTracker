const router = require('express').Router();
const path = require('path');

// routes to send users to correct html page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/exercise', (req, res) => res.sendFile(path.join(__dirname, 'exercise.html')));
app.get('/stats', (req, res) => res.sendFile(path.join(__dirname, 'stats.html')));