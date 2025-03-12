const fs = require('fs');

//Reading a file content
const f1_content = fs.readFileSync('f1.txt');
console.log("File 1 content: "+ f1_content);

//Writing content to a file
fs.writeFileSync('f2.txt', "I am File 2 content added..");

//Writing to a non available file 
//Thebelow command creates a new file f3.txt and writes content
fs.writeFileSync("f3.txt", "I am File 3 content");

//Updating or appending content
fs.appendFileSync("f2.txt", " Hi i am appended content..")

//Deleting a file
fs.unlinkSync("f1.txt");