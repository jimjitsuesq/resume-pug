const express = require('express');
const resume = require('./resume.json');
const app = express();
app.locals.resume = resume;

app.use('/static', express.static('public'));
app.use('/images', express.static('images'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index.pug', resume);
});

app.get('/favicon.ico', function(req, res) { 
  res.status(204);
  res.end();    
});

// app.listen(3000, '0.0.0.0');

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
/**
 * A custom error route used to simulate 500 errors for testing purposes
 */

// app.get('/error', (req, res, next) => {
//     console.log('Custom error route called');
  
//     const err = new Error();
//     err.status = 500;
//     err.message = `Custom ` + err.status + ` error thrown`
//     throw err;
//   });

/**
 * A 404 error handler for when a resource is not found on the site
 */

// app.use((req, res, next) => {
//     const err = new Error();
//     err.status = 404;
//     err.message = 'Oops! That page was not found!'
//     console.log(err.status, 'error handler called');
//     console.log(err.message);
//     res.status(404).render('page-not-found.pug', {err});
// });

/**
 * A global error handler to handle all errors thrown browsing the site
 */

// app.use((err, req, res, next) => {
//   if (err) {
//     console.log('Global error handler called');
//   }
//   if (err.status === 404) {
//     res.status(404).render('page-not-found', { err });
//   } else {
//     err.message = err.message || `Oops!  It looks like something went wrong on the server.`;
//     res.status(err.status || 500).render('error.pug', { err });
//     console.log(err.status);
//     console.log(err.message);
//   }
// });