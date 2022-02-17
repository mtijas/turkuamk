import { StatusCodes } from "http-status-codes";

export default class Router {
  routeHandlers = {};

  /**
   * Set route handling rules.
   *
   * Rule may have generic regexp. * represents wild card (will be changed
   * to `[\w\./]*` eventually).
   *
   * Expects newRouteHandlers in format
   * {
   *   method: {
   *     rule: handler,
   *   }
   * }
   * @param {dictionary of dictionaries} newRouteHandlers
   */
  setRouteHandlers(newRouteHandlers) {
    this.routeHandlers = newRouteHandlers;
  }

  /**
   * Get proper handler for provided url
   *
   * @param {object} methodHandlers
   * @param {string} url
   * @returns handler object or null if not found
   */
  getProperHandler(methodHandlers, url) {
    for (const [key, handler] of Object.entries(methodHandlers)) {
      //console.log(key);
      let preparedRE = key.replace("*", "[\\w\\./]*");
      let re = new RegExp(`^${preparedRE}$`, "i");
      //console.log(re);
      //console.log(re.test(url));
      if (re.test(url)) {
        return handler;
      }
    }
    return null;
  }

  /**
   * Routes requests to specific handlers based on routeHandlers dictionary.
   *
   * Expects routeHandlers to be in format:
   * {
   *   "get": {
   *     "/": handler_callback,
   *   },
   *   "post": {
   *     "/target": post_handler,
   *   }
   * }
   * @param {object} request
   * @param {object} response
   */
  handle(request, response) {
    if (!this.routeHandlers[request.method]) {
      response.writeHead(StatusCodes.INTERNAL_SERVER_ERROR);
      response.end("Method handlers not found");
      return;
    }

    let handler = this.getProperHandler(
      this.routeHandlers[request.method],
      request.url
    );

    if (handler !== null) {
      handler.handle(request, response);
    } else {
      response.writeHead(StatusCodes.INTERNAL_SERVER_ERROR);
      response.end("Route handlers not found");
    }
  }
}
