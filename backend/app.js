const express = require("express");
const cors = require("cors");

// Start express app
const app = express();

// Access-Control-Allow-Origin
app.use(cors());
app.options("*", cors());

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

module.exports = app;
