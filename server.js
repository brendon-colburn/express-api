import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bookRouter from './Routes/bookRouter';
import bussinessRouter from './Routes/businessRouter';

const app = express();
const port = process.env.PORT || 5656;
// Connecting to the database
const db = mongoose.connect('mongodb+srv://api-user_1:daTXyCbPonbr6HFH@cluster0-6zjma.azure.mongodb.net/apitest', {useNewUrlParser: true});

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration


// setting body parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/api/Books', bookRouter);

// API routes
app.use('/api/Businesses', bussinessRouter);

// Running the server
app.listen(port, () => {
	console.log(`http://localhost:${port}`)
})

