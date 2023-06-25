const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require("express-session");

const { screenSocket } = require("./sockets/screen");

const env = process.env.NODE_ENV || "local";

dotenv.config({ path: __dirname + `/config/.env.${env}` });

const { router: movieRouter } = require("./routes/movie");

mongoose.set('strictQuery', false);

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var app = express();

app.use(
  session({
    secret: "50c29d05f9e4c4df37215a8f2b4d02a144853fdeca848f5478b3a67fa9fb4a0c",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

//Adding ejs
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);
app.use(express.static(__dirname + "/public"));

//Initialize server
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use("/", movieRouter);
app.use("/screen", require("./routes/screen"));
app.use("/order", require("./routes/order_tickets"));
app.use("/login", require("./routes/login"));
app.use("/admin", require("./routes/admin"));
app.use("/halls", require("./routes/halls"));
app.use("/about", require("./routes/about"));
app.use("/statistics", require("./routes/statistics"));
app.use("/branch", require("./routes/branch"));

//sockets
const http = require("http").Server(app);
app.set("io", screenSocket);

http.listen(process.env.PORT || 8080);
