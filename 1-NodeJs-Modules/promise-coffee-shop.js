//Promises with asynch await

function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("You have placed order for coffee..");
    } else {
      reject("We dont serve the other drinks..");
    }
  });
}

function processOrder(order) {
  return new Promise(function (resolve, reject) {
    console.log("Your order is being processed..");
    resolve(`${order} and is served..`);
  });
}

// placeOrder("coffee")
//   .then(function (orderPlaced) {
//     console.log(orderPlaced);
//     let orderinProcess = processOrder(orderPlaced);
//     return orderinProcess;
//   })
//   .then(function (processOrder) {
//     console.log(processOrder);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//Output
// You have placed order for coffee..
// Your order is being processed..
// You have placed order for coffee.. and is served..

//The above code i=using asynch and await

let serveOrder = async function () {
  try {
    let orderPlaced = await placeOrder("tea");
    console.log(orderPlaced);

    let orderinProcess = await processOrder(orderPlaced);
    console.log(orderinProcess);
  } catch (err) {
    console.log("We dont serve the order");
  }
};

serveOrder();
