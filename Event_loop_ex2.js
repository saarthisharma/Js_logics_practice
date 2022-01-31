// example 2 of event loop and the call stack

const bar = () =>{
    console.log("bar")
}
const baz = () =>{
    console.log("baz")
}

const foo = () =>{
    console.log("foo")
    setTimeout(bar , 0) // passing bar as an argument
    baz()
}

foo()