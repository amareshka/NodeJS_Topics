const fs = require("fs");

// Create a directory

//fs.mkdirSync('NewDirectory');

//Get the contents of a directory

// const folderPath = "D:\\ScalerNodeJS_Topics\\1-NodeJs-Modules\\NewDirectory";

// const folderContent = fs.readdirSync(folderPath);
// const currentFolderContent = fs.readdirSync(__dirname);//Returns current directory files
// console.log("Floder Content: ", folderContent);// Returns file names in an array
// console.log("Floder Content: "+folderContent);// Returns file names as string

// chesks for existance of a file or directory
const folderPath = "D:\\ScalerNodeJS_Topics\\1-NodeJs-Modules\\NewDirectory";
const dirExists = fs.existsSync(folderPath);
console.log(dirExists);

//Deleting directory - Before deleting the folder should be empty

//fs.rmdirSync("D:\\Scaler\NodeJS_Topics\\1-NodeJs-Modules\\Dir-delete");
//fs.rmdirSync(__dirname);
