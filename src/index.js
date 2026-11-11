const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes
app.get('/', (req, res) => {
  res.render('home'); // render view home
});

app.get('/news', (req, res) => {
  res.render('news'); // render view home
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});