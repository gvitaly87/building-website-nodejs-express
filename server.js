const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

//set ejs as the view engine for express
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

//Every time we see a app.use we apply a Middleware in express
app.use(express.static(path.join(__dirname, './static')));

//Can be used to send individual pages.
// app.get('/', (req, res) =>{
//   res.sendFile(path.join(__dirname, './static/index.html'));
// });

// app.get('/speakers', (req, res) =>{
//   res.sendFile(path.join(__dirname, './static/speakers.html'));
// });

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
