const express = require('express');

const router = express.Router();

module.exports = (params) => {
  // Destructuring assignment
  const { speakersService } = params;

  router.get('/', async (req, res) => {
    // getList is an asynchronous function so need to wait for it and set the callback function as async
    const speakers = await speakersService.getList();
    return res.json(speakers);
  });

  router.get('/:shortname', (req, res) => res.send(`Detail page of ${req.params.shortname}`));

  return router;
};
