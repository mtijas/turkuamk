const port = 3000;
const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.listen(port, () => {
  console.log(`The server has started and listens on port ${port}`);
});
