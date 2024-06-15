const express = require('express');
const app = express();

const path = require('path');
const workingHours = require('./routes/workinghours');

const port = 3001;

app.set('view engine', 'pug');
app.set('views','./views');

app.use(workingHours);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('index', {title: 'Home'});
});
app.get('/services', (req, res) => {
  res.render('services', {title: 'Services'});
});
app.get('/contact', (req, res) => {
  res.render('contact', {title: 'Contact Us'});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});