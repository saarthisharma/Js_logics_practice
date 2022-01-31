// event loop and call stack
// source - https://nodejs.dev/learn/the-nodejs-event-loop
// example 1 

const bar = () =>{
    console.log("bar");
}
const baz = () =>{
    console.log("baz")
}

const foo = () =>{
    console.log("foo")
    bar()
    baz()
}

foo()