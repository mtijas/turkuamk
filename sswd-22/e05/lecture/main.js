const express = require("express");
const layouts = require("express-ejs-layouts");
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

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

app.get("/", homeController.respondWithName);

app.use(errorController.logErrors);
app.use(errorController.respondNotFound);
app.use(errorController.respondInternalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at ${app.get("port")}`);
});
