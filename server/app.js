const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const routes = require("./routes");

const app = express();

dotenv.config();
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.APP_PORT,
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/", routes);

async function run() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.DB_CONNECT_URI);
    app.listen(process.env.APP_PORT);
  } catch (err) {
    return console.log(err);
  }
}

run();
