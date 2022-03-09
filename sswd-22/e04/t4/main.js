const port = 3000;
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.post("/contact", (req, res) => {
  res.send("Contact information submitted successfully.");
});

app.get("/items/:vegetable", (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
});

app.listen(port, () => {
  console.log(`The server has started and listens on port ${port}`);
});
