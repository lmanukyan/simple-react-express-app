const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(
  session({
    secret: "Your secret key"
  })
);

app.use('/', routes)

async function run() {
  try{
      await mongoose.connect("mongodb://127.0.0.1:27017/basicstech");
      app.listen(4000);
      console.log("Сервер ожидает подключения...");
  }
  catch(err) {
      return console.log(err);
  }
}

run();