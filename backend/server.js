// require modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const fs = require('fs');
const PORT = require('./config/config.js').PORT;
const helmet = require('helmet');
// var http = require('http');
// var client = http.createClient(PORT, 'itunes.apple.com');

// Init express
const app = express();

// add middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

// welcome
app.get('/', (req, res) => {
  res.send('Welcome');
});

// routes
app.use('/api', routes);

// listen on port
app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});
