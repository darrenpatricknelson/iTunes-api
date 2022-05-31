// require modules
const express = require('express');
const router = express.Router();
const axios = require('axios');

const fetchAPI = async (term, media) => {
  // create URL
  const url = `https://itunes.apple.com/search?term=${term}&limit=28&entity=${media}`;
  // use axios to do a fetch
  const response = await axios.get(url);

  // return a prmomise
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
  });
};

// GET (read)
router.get('/fetch/:term&:media', (req, res) => {
  //   get info from the users from
  const term = req.params.term;
  const media = req.params.media;

  fetchAPI(term, media)
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

// export module
module.exports = router;
