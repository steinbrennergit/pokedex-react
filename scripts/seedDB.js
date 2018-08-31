const mongoose = require("mongoose");
const db = require("../models");

// This file reads and parses CSV files for import into our DB

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pokedex"
);