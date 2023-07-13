require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const mime = require("mime");

app.use(morgan(`${process.env.MORGAN_LEVEL}`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("app/static"));

module.exports = app;
