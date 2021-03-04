
const express = require('express');

// import routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// create port
const PORT = process.env.PORT || 3001;
// instantiate express
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listen on port
app.listen(PORT, () => console.log(`API server now on port ${PORT}!`));
