require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const userRouter = require("./routes/userRouter");
// const artistRouter = require("./routes/artistRouter");

const app = express();

app.enable("trust-proxy");

// Access-Control-Allow-Origin
app.use(cors());
app.options("*", cors());

// Serving static files
app.use(express.static(path.join(__dirname, "public")));
app.use(helmet({ crossOriginEmbedderPolicy: false, originAgentCluster: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
// app.use("/api/v1/artist", artistRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
