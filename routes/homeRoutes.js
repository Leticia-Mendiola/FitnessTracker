const express = require('express');
const path = require('path');
const app = express();

// routes to send users to correct html page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/exercise', (req, res) => res.sendFile(path.join(__dirname, 'exercise.html')));
app.get('/stats', (req, res) => res.sendFile(path.join(__dirname, 'stats.html')));