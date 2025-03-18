const myPromise = new Promise((resolve, reject) => {
  let a = 4,
    b = 5;

  setTimeout(() => {
    if (a === b) {
      resolve("The values are equal..");
    } else {
      reject("The values are not equal..");
    }
  }, 2000);
});

console.log(myPromise);
//OutPut : Promise { <pending> }

//Consuming the promise
//Resolve scenario
myPromise.then((result) => {
  console.log("Promise Result: " + result);
});

//Reject scenario
myPromise.catch((result) => {
  console.log("Promise Result: " + result);
});
