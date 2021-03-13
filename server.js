require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

// Import the classes with the functions to render the json files
const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

// Create two objects from the classes and refer them to the json files.
const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');

const routes = require('./routes');

const app = express();

// Read the host address and the port from the environment
const hostname = process.env.HOST;
const port = process.env.PORT || 3000;

// If we don't set this the whole cookie system might fail when it goes to production
app.set('trust proxy', 1);

// The keys are randomly typed for encoding
app.use(
  cookieSession({
    name: 'session',
    keys: ['Hugrkb401nhue', 'Wsarcg4857etony'],
  })
);
// set ejs as the view engine for express
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Every time we see a app.use we apply a Middleware in express
// Returns the static asset as long as it is found in the specified folder.
app.use(express.static(path.join(__dirname, './static')));

// Set up a dedicated routing infrastructure
app.use(
  '/',
  routes({
    feedbackService,
    speakersService,
  })
);

// 404 Not Found page.
// app.use((req, res) => res.status(404).redirect('404.html'));

// Start a TCP server listening for connections on the given port and host
app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));
