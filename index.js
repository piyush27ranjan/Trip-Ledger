const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


var port = 8000;

const app = express();

// Connect to MongoDB using mongoose
mongoose.connect('mongodb://127.0.0.1:27017/trip-ledger');
mongoose.Promise = global.Promise;

// Use body parser
app.use(bodyParser.json());

// initialize routes routes
app.use('/api', require('./api/api'));

// Error handling middleware
app.use((err, req ,res ,next) => {
	console.log(err);
	res.status(402).send({error: err.message});
});
// Listen on port
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});