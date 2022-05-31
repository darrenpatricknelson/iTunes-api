// require modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const fs = require('fs');
const PORT = require('./config/config.js').PORT;
const helmet = require('helmet');
const path = require('path');

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

// serve static assest if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

// listen on port
app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});
