const httpStatus = require("http-status-codes");

exports.respondNotFound = (req, res) => {
  let errorCode = httpStatus.StatusCodes.NOT_FOUND;
  res.status(errorCode);
  res.sendFile(`./public/errors/${errorCode}.html`, {
    root: "./",
  });
};

exports.respondInternalServerError = (error, req, res, next) => {
  let errorCode = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, our application is
experiencing a problem!`);
  next(error);
};

exports.logErrors = (error, req, res, next) => {
  console.error(error.stack);
  next(error);
};
