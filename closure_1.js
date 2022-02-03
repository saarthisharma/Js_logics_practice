// another example of closure

function foo(outer_arg){
    console.log("->",outer_arg)
    
    function inner(inner_arg){
        console.log("->",inner_arg)
        return outer_arg + inner_arg;
    }
    return inner;
}

let get_func_inner = foo(5)

console.log(get_func_inner(4));
// console.log(get_func_inner(3));