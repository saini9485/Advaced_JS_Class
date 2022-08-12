Promise.resolve(1)
  .then(() => console.log("promise1 resol"))
  .catch((err) => console.log("catching 1 promise"));
Promise.resolve(1).then(() => console.log("promise2"));
Promise.resolve(1).then(() => console.log("promise3"));
Promise.resolve(1).then(() => console.log("promise4"));
Promise.resolve(1).then(() => console.log("promise1"));
Promise.resolve(1).then(() => console.log("promise2"));
Promise.resolve(1).then(() => console.log("promise3"));
Promise.resolve(1).then(() => console.log("promise4"));
Promise.resolve(1).then(() => console.log("promise1"));
Promise.resolve(1).then(() => console.log("promise2"));
Promise.resolve(1).then(() => console.log("promise3"));
Promise.resolve(1).then(() => console.log("promise4"));
