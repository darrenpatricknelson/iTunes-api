// require modules
const express = require('express');
const router = express.Router();
const fs = require('fs');
const axios = require('axios');

/* 
! If needed:
a function to generate a random ID
*/
const generateID = () => {
  return Math.floor(Math.random() * Date.now());
};

// create global variable of the data
const data = JSON.parse(fs.readFileSync('./db.json'));

// create a writeFileSync function
const writeFile = (content) => {
  fs.writeFileSync('./db.json', JSON.stringify(content, null, 2), (err) => {
    if (err) {
      return res.send('Write a message here', err);
    }
  });
};

/* 
! CRUD methods:
- Create (POST)
- Read (GET)
- Update (PUT)
- Delete (DELETE)
*/

// GET (read)
router.get('/:term&:media', async (req, res) => {
  //   send a response to the user
  const term = req.params.term;
  const media = req.params.media;

  const url = `https://itunes.apple.com/search?term=${term}&limit=25&entity=${media}`;
  const response = await axios.get(url);
  return new Promise(async (resolve, reject) => {
    if (response.statusText) {
      try {
        const data = await response.data;

        resolve(data);
      } catch (err) {
        console.log({ err });
      }
    }

    reject(response.statusText);
  })
    .then((payload) => {
      res.json({
        message: 'here you go',
        success: true,
        payload: payload.results
      });
    })
    .catch((err) => {
      if (err) {
        res.json({
          message: 'Oh no, it seems an error has occurred',
          success: false,
          err
        });
      }
    });
});

// POST (create)
router.post('/create', (req, res) => {
  const id = generateID();
  const newObject = Object.assign({ id }, req.body);
  data.push(newObject);

  /* 
  ! fs.writeFileSync
    */
  writeFile(data);

  //   send a response to the user
  res.json({
    message: 'Write a message',
    success: true,
    data
  });
});

// PUT (update)
router.put('/update/:id', (req, res) => {
  const id = Number(req.params.id);
  const newObject = Object.assign({ id }, req.body);

  //   loop of data array to find existing object
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      data[i] = newObject;
    }
  }

  /* 
  ! fs.writeFileSync
    */
  writeFile(data);

  //   send a response to the user
  res.json({
    message: 'Write a message',
    success: true,
    data
  });
});

// DELETE (delete)
router.delete('/delete/:id', (req, res) => {
  const id = Number(req.params.id);

  //   loop of data array to find existing object
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      //   delete the index from the array using splice
      data.splice(i, 1);
    }
  }

  /* 
  ! fs.writeFileSync
    */
  writeFile(data);

  //   send a response to the user
  res.json({
    message: 'Write a message',
    success: true,
    data
  });
});

// export module
module.exports = router;
