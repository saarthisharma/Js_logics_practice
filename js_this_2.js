// In the strict mode, JavaScript sets the this inside a function to undefined

// example
// simple function invocation 
function show() {
    "use strict";
    console.log(this == undefined); // true

    function display() {
        console.log(this == undefined); // true
    }
    display();
}

show();




// // in non strict mode - this refrences to the global object
// function show(){
//     console.log(this)
// }
// show()


