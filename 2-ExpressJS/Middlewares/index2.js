function myMiddleware2(req, res, next) {
  console.log("Hi I am second middleware");
  next(); // Next method is used to pass the control to the next middleware or function
}

module.exports = myMiddleware2;
