//Reading file data "Synchronously" using callbacks

const fs = require("fs");

console.log("First line of the code..");

const f1data = fs.readFileSync("f1.txt");
console.log("File 1 content -> " + f1data);

const f2data = fs.readFileSync("f2.txt");
console.log("File 2 content -> " + f2data);

console.log("Last line of the code");

// Output
//---------------------------------------------------------
// First line of the code..
// File 1 content -> I am File 1 content added..
// File 1 content -> I am File 2 content added.. Hi i am appended content..
// Last line of the code

// In the above the code execution takes line by line.
// If the content of the files is too large then there will be a delay in executing the last line.
// To avoid this we will use asynch methods
