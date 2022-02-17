import * as http from "http";
import { StatusCodes } from "http-status-codes";
import * as fs from "fs";

const port = 3000;
const routeMap = {
  "/": "views/index.html",
  "/page": "views/page.html",
  "/coffee": "views/coffee",
};

const app = http.createServer((request, response) => {
  console.log(`Request URL: ${request.url}`);
  if (routeMap[request.url]) {
    fs.readFile(routeMap[request.url], (error, data) => {
      if (error) {
        // Of course we should actually reply with error 404 or 501 perhaps!
        response.writeHead(StatusCodes.IM_A_TEAPOT, {
          "Content-Type": "text/html",
        });
        response.write(
          '<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418">Error 418</a>'
        );
      } else {
        response.writeHead(StatusCodes.OK, {
          "Content-Type": "text/html",
        });
        response.write(data);
      }
      response.end();
    });
  } else {
    response.writeHead(StatusCodes.NOT_FOUND);
    response.write("<h1>File not found</h1>");
    response.end();
  }
});

app.listen(port);

console.log(`The server has started and listens on port ${port}`);
