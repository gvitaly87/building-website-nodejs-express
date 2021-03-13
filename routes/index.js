const express = require('express');

const speakersRoute = require('./speakers');

const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  router.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: 'Welcome' });
  });
  // Use the routers defined in speakers.js and feedback.js respectively. Need to be required first.
  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));

  return router;
};
