const path = require('path');

const express = require("express");
const mongoose = require("mongoose");

const indexRoutes = require("./routes/index");

const app = express();
// * config DB

mongoose.connect("mongodb://localhost:27017/todos").then(() => {
  console.log("db connected!");
});

// * config urlEncoded
app.use(express.urlencoded({ extended: false }));

// * config static pahts
app.use(express.static(path.join(__dirname,'public')));
//* Ejs
app.set('view engine', 'ejs');

// * Routes

app.use(indexRoutes);

app.listen(3000, () => console.log("server is runnig!"));
