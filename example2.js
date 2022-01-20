// index of quesn
// Write a function secondIndexOf, 
// taking two strings and determining the second occurrence 
// of the second string in the first string. 
// If the search string does not occur twice, -1 should be returned.

// Example: secondIndexOf('White Rabbit', 'it') should return 10.

function secondIndexOf(string1 , string2){
    let str1 = string1.indexOf('it' , 3)
    return str1;
    }
    let result =secondIndexOf('White Rabbit', 3)
    console.log(result)