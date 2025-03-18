//Reading file data "Asychronously" using callbacks

const fs = require("fs");
const { METHODS } = require("http");

console.log("First line of the code..");

fs.readFile("f1.txt", callbackFunction1);

function callbackFunction1(err, f1data) {
  if (err) {
    console.log("Error -> " + err);
  }
  console.log("File 1 content -> " + f1data);
}

fs.readFile("f2.txt", callbackFunction2);

function callbackFunction2(err, f2data) {
  if (err) {
    console.log("Error -> " + err);
  }
  console.log("File 2 content -> " + f2data);
}

console.log("Last line of the code..");

// Output
//---------------------------------------------------------
// First line of the code..
// Last line of the code..
// File 2 content -> I am File 1 content added..
// File 2 content -> I am File 2 content added.. Hi i am appended content..

// In the above code the last line of the code executes before the file read methods
// File read method "fs.readFile" method reads the file data asynchronously
// The reading of the files will be doing in random order
