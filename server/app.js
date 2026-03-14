"use strict";

const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("express-async-errors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

const origins = (process.env.CORS_ORIGINS || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim());

app.use(cors({ origin: origins }));

app.all("/", (req, res) => {
  res.send("WELCOME TO TODO API");
});

app.use(require("./routes/todo.router"));
app.use(require("./middlewares/errorHandler"));

app.listen(PORT, () => console.log(`Running: http://127.0.0.1:${PORT}`));