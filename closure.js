// understanding closures
// function with the lexical scope forms a closure.

// closure is created when a child function keep the 
// environment of the parent scope even after the parent function has already executed 

function x(){
    console.log('x calling first')
    let a = 1;
    console.log("->" , a)
    function y(){
        console.log('y calling first')
        let b = 2 ;
        console.log("->" , b)
        function z(){
            console.log('z calling first')
            console.log(a ,",", b)
        }
        z();
    }
    y();
}
x();


// in the above example ,  the inner function z() preserves the scope chain of the enclosing function at
//  the time of execution of the enclosing function.