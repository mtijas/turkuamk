import * as fs from "fs";
import { extname } from "path";
import { StatusCodes } from "http-status-codes";

export default class FileResponder {
  contentTypesDefs = {
    ".html": { "Content-Type": "text/html" },
    ".js": { "Content-Type": "text/javascript" },
    ".css": { "Content-Type": "text/css" },
  };

  /**
   * Get content type object for file path / url.
   *
   * @param {string} filePath
   * @returns content type object, defaults to text/plain
   */
  getContentType(filePath) {
    let extension = extname(filePath);
    if (this.contentTypesDefs[extension]) {
      return this.contentTypesDefs[extension];
    }
    return { "Content-Type": "text/plain" };
  }

  /**
   * Responds with file from file system under ./public subfolder.
   * Responds 404 if file not found, 500 if file could not be read.
   *
   * @param {object} request
   * @param {object} response
   * @returns null on error
   */
  handle(request, response) {
    let filePath = `./public${request.url}`;

    if (!fs.existsSync(filePath)) {
      response.writeHead(StatusCodes.INTERNAL_SERVER_ERROR);
      response.end("File not found");
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        console.log(error);
        response.writeHead(StatusCodes.INTERNAL_SERVER_ERROR);
        response.end("Error reading file");
        return;
      }

      response.writeHead(StatusCodes.OK, this.getContentType(filePath));
      response.end(data);
    });
  }
}
