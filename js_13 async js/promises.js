//!Promises

// new Promise((resolveFn, rejectFn) => {})

const promise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Resolve response"), 2000);
  } else reject("Reject response");
});

// console.log(promise);

// setTimeout(() => console.log(promise), 11000);

// promise.then((result) => console.log(result));

//? promise chaining;
promise;
//   .then((result) => result + " first .then")
//   .then((result2) => console.log(result2));

//? reject scenario
// promise.then((result) => console.log(result)).catch((e) => console.log(e));

//? and finally
// promise
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e))
//   .finally(() => console.log("fetching finished"));

//? fetch example

const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((e) => console.log(e))
  .finally(() => console.log("fetching finished"));

/*
https://kaker-js-crud.onrender.com/cafe-04/party - masyvas su vienu objektu; 
https://kaker-js-crud.onrender.com/cafe-04/wedding - masyvas su daug objektu; 
https://kaker-js-crud.onrender.com/cafe-04/meme - objektas su img nuoroda; 
*/
