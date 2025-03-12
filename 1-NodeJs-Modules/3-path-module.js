const path = require('path');

const extName = path.extname('D:\\Scaler\\NodeJs\\1-NodeJs-Modules\\demo.txt');
console.log("File Extension is : ", extName) // .txt

const baseName = path.basename('D:\\Scaler\\NodeJs\\1-NodeJs-Modules\\demo.txt');
console.log("Base name of the file is ", baseName);

console.log("Current File : ", __filename);

console.log("Current Folder : ", __dirname);