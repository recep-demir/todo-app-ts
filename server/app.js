"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

require('express-async-errors');

app.use(express.json());


const cors = require('cors');
app.use(cors({
    origin: ['https://example.com', 'http://localhost:5173', 'http://localhost:3000', 'https://typescript-fs-todo-app.netlify.app/'], 
}));

app.all('/', (req, res) => {
    res.send('WELCOME TO FS-TS-TODO API')
});

app.use('/todos', require('./routes/todo.router'));

app.use(require('./middlewares/errorHandler'));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));