const port = 3000;
const http = require("http");
const httpstatus = require("http-status-codes");
const app = http.createServer((request, response) => {
  console.log("Received an incoming request.");
  console.log(`Method info: ${request.method}`);
  console.log(`URL info: ${request.url}`);
  console.log(`Header info: ${JSON.stringify(request.headers)}`);
});

app.listen(port);

console.log(`The server has started and listens on port ${port}`);
