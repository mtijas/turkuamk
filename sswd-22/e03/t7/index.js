import * as http from "http";
import Router from "./router.js";
import FileResponder from "./file-responder.js";
import DynamicResponder from "./dynamic-responder.js";

const router = new Router();
const fileResponder = new FileResponder();
const dynamicResponder = new DynamicResponder();

const port = 3000;
const routingConfig = {
  GET: {
    "/": dynamicResponder,
    "/articles": dynamicResponder,
    "/articles/*": dynamicResponder,
    "/*": fileResponder,
  },
};

router.setRouteHandlers(routingConfig);

const app = http.createServer((request, response) => {
  console.log(`Request URL: ${request.url}`);
  router.handle(request, response);
});

app.listen(port);

console.log(`The server has started and listens on port ${port}`);
