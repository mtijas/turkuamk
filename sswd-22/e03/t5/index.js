import * as http from "http";
import { StatusCodes } from "http-status-codes";
import * as fs from "fs";
import { extname } from "path";

const port = 3000;
const allowedContentTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
};

const respondWithError = (code, message, response) => {
  response.writeHead(code, {
    "Content-Type": "text/html",
  });
  response.write(`<h1>${message}</h1>`);
  response.end();
};

const getContentType = (filePath) => {
  let extension = extname(filePath);
  if (allowedContentTypes[extension]) {
    return allowedContentTypes[extension];
  }
  return "text/plain";
};

const respondWithFile = (filePath, response) => {
  if (!fs.existsSync(filePath)) {
    respondWithError(StatusCodes.NOT_FOUND, "File not found", response);
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      console.log(error);
      respondWithError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        "Error reading file",
        response
      );
      return;
    }

    response.writeHead(StatusCodes.OK, {
      "Content-Type": getContentType(filePath),
    });
    response.write(data);
    response.end();
  });
};

const app = http.createServer((request, response) => {
  console.log(`Request URL: ${request.url}`);
  respondWithFile(`./public${request.url}`, response);
});

app.listen(port);

console.log(`The server has started and listens on port ${port}`);
