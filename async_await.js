// let myPromise = new Promise(function(resolve,reject){
//     // this will make our promise wait for 3000 milli seconds
//     setTimeout(function(){
//         resolve("Promise Executed")
//         reject("Error")
//     },3000)
// })

// function callPromise(){
//     myPromise.then((data)=>{
//         console.log(data)
//     }).catch(()=>{
//         console.log("error")
//     });
//     console.log("processing data from promise resolved")
// }   
// callPromise(); 

// this above code will print the "processing data" line first , because here our promise is the
// asynchronous process and have to wait for the 3 seconds to resolve until then our js single thread executes
// "processing data line first" it didnt wait for the promise to resolve.. after 3 seconds line "promise executed"
// will print.



// now we will use async-await keyword
// putting async keyword before function signifies that the function has some asynchronous process.
// await keyword wait for this promise to be resolve first and then take the program execution further.

let myPromise = new Promise(function(resolve,reject){
    // this will make our promise wait for 3000 milli seconds
    setTimeout(function(){
        resolve("Promise Executed")
        reject("Error")
    },3000)
})

async function callPromise(){
    await myPromise.then((data)=>{
        console.log(data)
    }).catch(()=>{
        console.log("error")
    });
    console.log("processing data from promise resolved")
}   
callPromise(); 