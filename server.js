// To make this all work: 
// Step 1: execute 'node server' in the terminal window.
// Step 2: In a browser window, type "http://127.0.0.1:3001"

// Load express
const express = require('express');
const path = require('path');
const studentsDb = require('./data/students-db');

// Create our express app
const app = express();

// Define a "root" route directly on app
// http://127.0.0.1:3001
app.get('/', function (req, res) {
  res.send('<h1>Hello Students!</h1>');
});

// http://127.0.0.1:3001/students
app.get('/students', function(req, res) {
  // notice that studentDb.getAll is defined in students-db.js
  // so, it's going into another file to get this data!
  const students = studentsDb.getAll();

  // students array is now going to index.ejs:
  // students.forEach(function(student) *** wicked cool ***
  res.render('students/index',{ students });
});

// Configure the app (app.set)
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
  
// Mount middleware (app.use)

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3001, function () {
  console.log('Listening on port 3001');
});