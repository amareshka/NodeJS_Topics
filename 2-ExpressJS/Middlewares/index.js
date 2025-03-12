function myMiddleware(req, res, next) {
  console.log("Hi I am middleware");
  next(); // Next method is used to pass the control to the next middleware or function
}

module.exports = myMiddleware;
