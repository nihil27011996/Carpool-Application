// Importing modules
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from 'body-parser'; // Import bodyParser module

import models from "../carpooling-app/model/index.js";
import route from '../carpooling-app/routes/index.js'

const carpooling = express();

carpooling.use(cors());
carpooling.use(express.json());

// Use bodyParser middleware for parsing URL-encoded data
carpooling.use(bodyParser.urlencoded({ extended: true }));

route(carpooling);

// Connecting to MongoDB
mongoose.connect('mongodb://127.0.0.1/carpool', {
  useNewUrlParser: true, // Add useNewUrlParser option
  useUnifiedTopology: true, // Add useUnifiedTopology option
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

export default carpooling;
