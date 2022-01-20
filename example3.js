// Write a function indexOfIgnoreCase taking 
// two strings and determining the first occurrence of the 
// second string in the first string. The function should be case insensitive.

// Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1.


function indexOfIgnoreCase(string1 ,string2)
{
let str1 = string1.toLowerCase()
let str2 = string2.toLowerCase()
return str1.indexOf(str2)
}
let result = indexOfIgnoreCase("window" , "do")
console.log(result)