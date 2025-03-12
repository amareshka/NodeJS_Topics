const child_process = require('child_process');
const { clearScreenDown } = require('readline');

//child_process.execSync('calc');// Opens calculator

//child_process.execSync('start chrome');//Opens Chrome browser

//child_process.execSync('start firefox');//Opens Firefox browser

//child_process.execSync('start chrome https://google.com')//Opens website google in chrome

console.log('output '+ child_process.execSync('node demo.js'));
