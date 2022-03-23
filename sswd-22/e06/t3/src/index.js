const DB_USER = process.env.MONGO_USERNAME;
const DB_PWD = process.env.MONGO_PWD;
const DB_HOST = process.env.MONGO_HOST;
const DB_PORT = process.env.MONGO_PORT;
const DB_NAME = process.env.MONGO_DB_NAME;

const DB_URI = `mongodb://${DB_USER}:${DB_PWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authMechanism=DEFAULT&authSource=admin`;

const express = require("express");
const layouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const Recipe = require("./models/recipe");
const subscribersController = require("./controllers/subscribersController");

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

/* //Creating a subscriber one way

var subscriber1 = new Subscriber({
  name: "Foo Bar",
  email: "foo@bar.baz",
  vip: true,
});

subscriber1.save((error, savedDocument) => {
  if (error) console.log(error);
  console.log(savedDocument);
});

//And the other way

Subscriber.create(
  {
    name: "Foo Bar",
    email: "foo@bar.baz",
    vip: true,
  },
  function (error, savedDocument) {
    if (error) console.log(error);
    console.log(savedDocument);
  }
);

Recipe.create(
  {
    name: "Test Recipe",
    timeToComplete: 45,
    directions: "Directions...",
  },
  function (error, savedDocument) {
    if (error) console.log(error);
    console.log(savedDocument);
  }
);

var myQuery = Recipe.findOne({
  name: "Test Recipe",
}).where("name", /Test Recipe/);
myQuery.exec((error, data) => {
  if (data) console.log(data.name);
}); */

const app = express();

app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(layouts);

app.use((req, res, next) => {
  console.log(`A request was made from ${req.url}`);
  next();
});

app.get(
  "/subscribers",
  subscribersController.getAllSubscribers,
  (req, res, next) => {
    console.log(req.data);
    res.render("subscribers", { subscribers: req.data });
  }
);

app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);

app.listen(app.get("port"), () => {
  console.log(`Server running at ${app.get("port")}`);
});
