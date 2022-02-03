// source - https://www.geeksforgeeks.org/javascript-promises/
// source - https://www.javascripttutorial.net/es6/javascript-promises/


// syntax
// var promise = new Promise(function(resolve, reject) {
//     // do thing, then…
  
//     if (/* everything worked */) {
//       resolve("See, it worked!");
//     }
//     else {
//       reject(Error("It broke"));
//     }
//   });


// creating promise constructor - by defining new Promise()

// Creates a new Promise object. 
// The constructor is primarily used to wrap functions that do not already support promises.
// The Promise constructor accepts a function as an argument. This function is called the executor.

// The executor function accepts two callback functions with the names resolve() and reject().

let promise = new Promise(function(resolve , reject){
    const x = "learningPromises"
    const y = "learningPromises"
    if(x===y)
    {
        resolve();
    }
    else
    {
        reject();
    }
});

// consuming promise

// then() method takes two callback functions
// syntax - promiseObject.then(onFulfilled, onRejected) - for promise fulfilled and rejected

promise.then(function(){
    console.log("success string matching")
}).catch(function(){
    console.log("string not matching")
})
