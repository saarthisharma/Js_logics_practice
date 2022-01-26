// let string = "121"
// let reverse_string = string.split('').reverse().join('')
// console.log(reverse_string)
// if(string == reverse_string)
// {
//     console.log("it is  a palindrome")
// }
// else
// {
//     console.log("it is not a palindrome")
// }


// method 2 
let string = "refer"
function check_pal()
{
for(let i=0;i<string.length/2;i++)
{
    if(string[i]!==string[string.length-1-i])
    {
        return "it is not a palindrome"
    }
    
    else
    {
        return "it is  a palindrome"
    }
}
}
let result =check_pal()
console.log(result)