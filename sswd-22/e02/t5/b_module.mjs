import { fileURLToPath } from "url";
import { dirname } from "path";

/**
 * Solution from kindacode.com, thanks to A. Goodman.
 * https://www.kindacode.com/article/node-js-using-__dirname-and-__filename-with-es-modules/
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function printVars() {
  console.log("Contents of __dirname: " + __dirname);
  console.log("Contents of __filename: " + __filename);
}

export { printVars };
