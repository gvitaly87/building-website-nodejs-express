const express = require('express');

const speakersRoute = require('./speakers');

const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  router.get('/', (req, res) => {
    // The cookie session stores the visit count, can initialize it to 0 if it doesn't exist(first visit for a user)
    if (!req.session.visitcount) {
      req.session.visitcount = 0;
    }
    req.session.visitcount += 1;
    console.log(`Number of visits: ${req.session.visitcount}`);

    res.render('pages/index', { pageTitle: 'Welcome' });
  });
  // Use the routers defined in speakers.js and feedback.js respectively. Need to be required first.
  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));

  return router;
};
