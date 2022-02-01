// function add(){
//     let sum = 1 + 2 
//     console.log(sum)
//     function subtract()
//     let subtraction = 2 - 1
//     console.log(subtraction)
//     console.log(this)
// }
// add()

function add(){
    let sum = 1+2
    console.log(sum)
    subtract()
    function subtract(){
        let minus = 2-1
        console.log(minus)
        console.log(this)
    }
}
add()