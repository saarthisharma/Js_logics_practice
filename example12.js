// program to display fibonacci sequence using recursion

// function countdown(number)
// {
//     console.log(number)
//     const newNumber = number-1;
//     if(newNumber>0)
//     {
//         countdown(newNumber)
//     }
    
// }
// countdown(4)
// 0, 1, 1, 2, 3, 5, 8, 13, 21
let n0 = 0;
let n1 = 1;

function fibonacci(position)
{
    console.log(n0)
    console.log(n1)
    for(let n=2;n<position;n++){
        let nextTerm = n0+n1;
        n0 = n1;
        n1 = nextTerm
        console.log(nextTerm)
    }
}
fibonacci(9)