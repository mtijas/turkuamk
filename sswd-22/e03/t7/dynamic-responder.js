import { StatusCodes } from "http-status-codes";

export default class DynamicResponder {
  /**
   * Responds with hard-coded page info for demonstration purposes
   *
   * @param {object} request
   * @param {object} response
   * @returns null on error
   */
  handle(request, response) {
    response.writeHead(StatusCodes.OK, { "Content-Type": "text/html" });
    response.end(`<h1>Dynamic Responder</h1><p>Got url: ${request.url}</p>`);
  }
}
