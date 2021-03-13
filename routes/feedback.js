const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => res.send('Feedback Page'));

  router.post('/', (req, res) => res.send('Feedback form posted'));

  return router;
};
