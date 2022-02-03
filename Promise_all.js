// Promise.all() static method to aggregate results from multiple asynchronous operations.
// Promise.all(iterable); iterable argument is the list of promises

let promise_1 = new Promise(function(resolve , reject){
    setTimeout( () =>{
        console.log("the first promise has been resolved")
        resolve(10);
    }, 1000)

});

let promise_2 = new Promise(function(resolve,reject){
    setTimeout( () =>{
        console.log("the second promise has been resolved")
        resolve(20);
    },2000)
});

let promise_3 = new Promise(function(resolve,reject){
    setTimeout( () =>{
        console.log("the third promise has been resolved")
        resolve(20);
    },3000)
});

// to wait for all three promises to resolve , we use promise.all() method 

Promise.all([promise_1,promise_2,promise_3])
.then(results => {
    const total = results.reduce((acc, curr) =>{
        return acc + curr ;
    },0);

    console.log(`Results: ${results}`);
    console.log(`Total: ${total}`);
});


